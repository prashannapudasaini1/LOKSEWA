from fastapi import APIRouter,Depends,HTTPException,status
from backend.database import get_db
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from backend.schemas.user import User_Create,User_read,TokenResponse,UserUpdate,UserRoleUpdate
from backend.utils.jwt import get_current_user
from backend.models.user import User,Roles
from backend.utils.hashed import hashed_password,verify_password
from backend.utils.auth import auth2_schema
from backend.core.permission import require_permission,check_permission
from backend.core.error_handler import error_handler
from backend.service.user_service import (
    create_user,
    user_login,update_user_information,
    change_user_role,
    delete_account_by_owner,
    delete_account_by_admin,
    get_user
)
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