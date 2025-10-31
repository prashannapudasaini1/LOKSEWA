from fastapi import Depends, HTTPException, status, Security
from backend.utils.jwt import get_current_user
from backend.database import get_db
from backend.utils.auth import auth2_schema

def check_permission(user,action:str):
    role=user.role_id
    permission={
        1: {  # super Admin
            "view_students": True,
            "add_student": True,
            "edit_student": True,
            "delete_student": True,
            "view_form":True,
            "upload_routine":True
            
        },
        2: {  
        },
        3: {  # Customer
            "browse_products": True,
            "place_order": True,
            "view_own_orders": True,
            "review_the_prduct":True,
            "delete_the_review":True
        }
    }
    role_permission=permission.get(role,{})
    return role_permission.get(action,False)


