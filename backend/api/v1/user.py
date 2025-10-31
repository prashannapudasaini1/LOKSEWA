from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models.user import User,Roles
from backend.schemas.user import (
    User_Create,
    User_read,
    TokenResponse,
    UserUpdate,
)
from backend.utils.jwt import create_token, verify_token
from backend.utils.hashed import hashed_password, verify_password
from backend.core.permission import check_permission
from backend.core.error_handler import error_handler

def create_user(db: Session, username: str, email: str, password: str) -> User_read:
    """Register a new user with hashed password and unique username/email."""

    if db.query(User).filter(User.username == username).first():
        raise error_handler(status.HTTP_302_FOUND, "Username already exists")
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from backend.database import get_db
from backend.schemas.user import User_Create, User_read, TokenResponse, UserUpdate
from backend.utils.jwt import get_current_user
from backend.models.user import User
from backend.service.user_service import (
    create_user,
    user_login,
    update_user_information,
    change_user_role,
    delete_account_by_owner,
    delete_account_by_admin,
    get_user
)
from backend.utils.auth import auth2_schema

router=APIRouter(prefix="/user",tags=["Authentication"] )

@router.post("/register",response_model=User_read)
def register(user:User_Create,db:Session = Depends(get_db)):
    return create_user(db,user.username,user.email,user.password)

@router.post("/login",response_model=TokenResponse)
def login(form_data:OAuth2PasswordRequestForm=Depends(),db:Session=Depends(get_db)):
    return user_login(db,form_data)

@router.patch("/{user_id}/update",response_model=User_read)
def update_user(user_id:int,user_update:UserUpdate,
                db:Session=Depends(get_db),
                current_user:User=Depends(get_current_user)):
    return update_user_information(db,user_id,user_update)

@router.patch("/{user_id}/role",response_model=User_read)
def user_role_change(user_id:int,new_role_id:int,
                     db:Session=Depends(get_db),
                     current_user:User=Depends(get_current_user)):
    return change_user_role(db,user_id,new_role_id,current_user)

@router.delete("/delete",status_code=status.HTTP_200_OK)
def delete_own_account(db:Session=Depends(get_db),current_user:User=Depends(get_current_user)):
    return delete_account_by_owner(db,current_user)

@router.delete("/delete/{user_id}",status_code=status.HTTP_200_OK)
def delete_act_by_admin(user_id:int,
                        db:Session=Depends(get_db),
                        current_user:User=Depends(get_current_user)):
    
    return delete_account_by_admin(user_id,db,current_user)

@router.get("/me")
def get_current_user(token:str=Depends(auth2_schema)):
    return get_user(token)
    if db.query(User).filter(User.email == email).first():
        raise error_handler(status.HTTP_302_FOUND, "Email already registered")

    new_user = User(
        username=username,
        email=email,
        hashed_password=hashed_password(password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return User_read.from_orm(new_user)

def user_login(db: Session, form_data: OAuth2PasswordRequestForm) -> TokenResponse:
    """Authenticate user and return JWT access token."""

    user = db.query(User).filter(User.email == form_data.username).first()

    if not user or not verify_password(form_data.password, user.hashed_password):
        raise error_handler(status.HTTP_400_BAD_REQUEST, "Invalid credentials")

    token = create_token({"email": user.email})
    return {"access_token": token, "token_type": "Bearer"}

def update_user_information(
    db: Session, user_id: int, user_update: UserUpdate
) -> User_read:
    """Update user details (self-profile edit)."""

    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise error_handler(status.HTTP_404_NOT_FOUND, "User not found")

    for key, value in user_update.dict(exclude_unset=True).items():
        setattr(user, key, value)

    db.commit()
    db.refresh(user)
    return User_read.from_orm(user)

def change_user_role(
    db: Session, user_id: int, new_role_id: int, current_user: User
) -> User_read:
    """Allow only admins to change user roles."""

    if not check_permission(current_user, "change_user_role"):
        raise error_handler(status.HTTP_401_UNAUTHORIZED, "Unauthorized access")

    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise error_handler(status.HTTP_404_NOT_FOUND, "User not found")

    role = db.query(Roles).filter(Roles.id == new_role_id).first()
    if not role:
        raise error_handler(status.HTTP_404_NOT_FOUND, "Role not found")

    user.role_id = new_role_id
    db.commit()
    db.refresh(user)

    return User_read.from_orm(user)

def delete_account_by_owner(db: Session, current_user: User) -> dict:
    """Allow a user to delete their own account."""

    user = db.query(User).filter(User.id == current_user.id).first()
    if not user:
        raise error_handler(status.HTTP_404_NOT_FOUND, "User not found")

    db.delete(user)
    db.commit()

    return {"message": "Your account has been deleted successfully."}

def delete_account_by_admin(
    user_id: int, db: Session, current_user: User
) -> dict:
    """Allow an admin to delete another user's account."""

    if not check_permission(current_user,"delete_other_account"):
        raise error_handler(status.HTTP_401_UNAUTHORIZED, "Unauthorized access")

    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise error_handler(status.HTTP_404_NOT_FOUND, "User not found")

    db.delete(user)
    db.commit()

    return {"message": f"User '{user.username}' has been deleted."}

def get_user(token: str) -> dict:
    """Decode JWT and return user identity."""
    user_email = verify_token(token)
    return {"email": user_email}
