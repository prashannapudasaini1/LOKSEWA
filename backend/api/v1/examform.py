from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models.user import User,Roles
from backend.schemas.examforminfo import (
    ExamFormCreate,ExamFormRead,ExamFormUpdate

)

from backend.core.permission import check_permission
from backend.core.error_handler import error_handler
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from backend.database import get_db
from backend.utils.jwt import get_current_user
from backend.models.examforminfo import ExamForm

router=APIRouter(prefix="/examform",tags=["Exam Form"] )

@router.post("/create",response_model=ExamFormRead)
def create_exam_form(exam_form:ExamFormCreate,
                     db:Session=Depends(get_db),
                     current_user:User=Depends(get_current_user)):
    if not check_permission(current_user,"apply_for_exam"):
        raise error_handler(status.HTTP_403_FORBIDDEN,"You do not have permission to apply for exam")
    if db.query(ExamForm).filter(ExamForm.user_id == current_user.id).first():
        raise error_handler(status.HTTP_400_BAD_REQUEST,"Exam form already submitted")
    new_form=ExamForm(
        user_id=current_user.id,
        first_name=exam_form.first_name,
        middle_name=exam_form.middle_name,
        last_name=exam_form.last_name,
        dob_ad=exam_form.dob_ad,
        don_bs=exam_form.dob_bs,
        gender=exam_form.gender,
        father_name=exam_form.father_name,
        mother_name=exam_form.mother_name,
        grandfather_name=exam_form.grandfather_name,
        spouse_name=exam_form.spouse_name,
        citizen_number=exam_form.citizen_number,
        issue_district=exam_form.issue_district,
        issue_date=exam_form.issue_date,
        email=exam_form.email,
        phone_number=exam_form.phone_number,
        caste=exam_form.caste,
        religion=exam_form.religion,
        marriage_status=exam_form.marriage_status,
        language=exam_form.language,
        occupation=exam_form.occupation,
        physical_disorder=exam_form.physical_disorder   )
    db.add(new_form)
    db.commit()
    db.refresh(new_form)
    return ExamFormRead.from_orm(new_form)
@router.put("/{exam_form_id}/update",response_model=ExamFormRead)
def update_exam_form(exam_form_id:int,
                        exam_form_update:ExamFormUpdate,
                        db:Session=Depends(get_db),
                        current_user:User=Depends(get_current_user)):
    
        exam_form=db.query(ExamForm).filter(ExamForm.id==exam_form_id).first()
        if not exam_form:
            raise error_handler(status.HTTP_404_NOT_FOUND,"Exam form not found")
        if exam_form.user_id != current_user.id and not check_permission(current_user,"edit_all_exam_forms"):
            raise error_handler(status.HTTP_403_FORBIDDEN,"You do not have permission to edit this exam form")
        for key, value in exam_form_update.dict(exclude_unset=True).items():
            setattr(exam_form, key, value)
        db.commit()
        db.refresh(exam_form)
        return ExamFormRead.from_orm(exam_form)
@router.get("/{exam_form_id}",response_model=ExamFormRead)
def get_exam_form(exam_form_id:int,
                  db:Session=Depends(get_db),
                  current_user:User=Depends(get_current_user)):
    if not check_permission(current_user,"view_exam_forms"):
        raise error_handler(status.HTTP_403_FORBIDDEN,"You do not have permission to view exam forms")  
    exam_form=db.query(ExamForm).filter(ExamForm.id==exam_form_id).first()
    if not exam_form:
        raise error_handler(status.HTTP_404_NOT_FOUND,"Exam form not found")
    if exam_form.user_id != current_user.id and not check_permission(current_user,"view_all_exam_forms"):
        raise error_handler(status.HTTP_403_FORBIDDEN,"You do not have permission to view this exam form")
    return ExamFormRead.from_orm(exam_form)
@router.get("/me",response_model=ExamFormRead)
def get_my_exam_form(db:Session=Depends(get_db),
                     current_user:User=Depends(get_current_user)):
    exam_form=db.query(ExamForm).filter(ExamForm.user_id==current_user.id).first()
    if not exam_form:
        raise error_handler(status.HTTP_404_NOT_FOUND,"Exam form not found")
    return ExamFormRead.from_orm(exam_form)