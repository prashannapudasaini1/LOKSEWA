from pydantic import BaseModel, EmailStr, constr,validator,Field
import re
from datetime import datetime

class UserBase(BaseModel):
    
    username:str 
    email: EmailStr=Field(...,description="Valid emial address of the user")
    
    class Config:
        orm_mode = True
        from_attributes = True

    
class User_Create(UserBase):
    password: str=Field(...,min_length=6,max_length=30,description="Valid and Strong password")
    @validator('password')
    def strong_password(cls,v):
        if not re.search("[A-Z]",v):
            raise ValueError("The password should contain Uppercase")
        if not re.search("[a-z]",v):
            raise ValueError("The password should contain lowercase")
        return v
    

class User_read(UserBase):
    id:int=Field(...,description="The unique Id of user")
    role_id:int=Field(...,description="User role")
    
    class Config:
        orm_mode = True
        from_attributes = True
        
class UserRoleUpdate(BaseModel):
    user_id:int=Field(...,description="User unique id")
    new_role: int=Field(...,description="The update role")
    email: EmailStr

class UserUpdate(BaseModel):   
    username : constr(min_length=5,max_length=15)=Field(...,description="Update username")
    email : EmailStr=Field(...,description="Update email")
    
    class Config:
        orm_mode = True
        from_attributes = True
    
class TokenResponse(BaseModel):
    access_token: str=Field(...,description="JWT access token")
    token_type: str=Field(...,description="The token type")
    