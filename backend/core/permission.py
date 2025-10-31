from fastapi import Depends, HTTPException, status, Security
from backend.utils.jwt import get_current_user
from backend.database import get_db
from backend.utils.auth import auth2_schema

def check_permission(user,action:str):
    role=user.role_id
    permissions = {
        1: {  # Super Admin
            "manage_admins": True,
            "manage_exams": True,
            "verify_forms": True,
            "approve_forms": True,
            "view_all_applications": True,
            "view_exam_forms": True,
            "publish_results": True,
            "view_dashboard": True,
            "delete_user": True,
        },
        2: {  # Admin
            "create_exam_post": True,
            "edit_exam_post": True,
            "verify_application": True,
            "approve_application": True,
            "view_applicants": True,
            "upload_routine": True,
            "publish_result": True,
            "view_dashboard": True,
        },
        3: {  # Applicant (User)
            "login_student_port":True,
            "view_exam_notices": True,
            "apply_for_exam": True,
            "edit_own_application": True,
            "upload_documents": True,
            "make_payment": True,
            "download_admit_card": True,
            "view_result": True,
        }
    }
    role_permission=permissions.get(role,{})
    return role_permission.get(action,False)


