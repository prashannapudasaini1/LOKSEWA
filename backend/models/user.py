from __future__ import annotations
from backend.database import Base
from sqlalchemy import Integer,String,Float,ForeignKey,Column,DateTime, func
from datetime import datetime
from sqlalchemy.orm import relationship,Mapped,mapped_column

class User(Base):
    
    __tablename__ = "user"
    
    id : Mapped[int]=mapped_column(Integer, primary_key=True, index=True)
    username : Mapped[str]=mapped_column(String, unique=True, nullable=False)
    email : Mapped[str]=mapped_column(String, unique=True, index=True, nullable=False)
    hashed_password : Mapped[str]=mapped_column(String, nullable=False)
    created_at : Mapped[DateTime]=mapped_column(DateTime, default=datetime.utcnow)
    updated_at : Mapped[DateTime]=mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    role_id : Mapped[int] = mapped_column(ForeignKey("roles.id"), default=3)
    
    role : Mapped["Roles"]=relationship("Roles",back_populates="users")
    
    
    def __repr__(self)->str:
        return f"<User(username={self.username},email={self.email})>"

class Roles(Base):
    
    __tablename__="roles"
    id=Column(Integer,index=True,primary_key=True,nullable=False)
    role_name=Column(String,unique=True,nullable=False)
    descripted=Column(String)

    users :Mapped[list["User"]]=relationship("User",back_populates="role")
    
    def __repr__(self)->str:
        return f"<Role(id={self.id},role_name={self.role_name})>"

