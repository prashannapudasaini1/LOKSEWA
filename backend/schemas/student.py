from pydantic import BaseModel
from typing import Optional

class StudentBase(BaseModel):
    firstname: str
    lastname: str
    email: str
    phone: int
    education_level: str 
    gender:str
    
class StudentCreate(StudentBase):