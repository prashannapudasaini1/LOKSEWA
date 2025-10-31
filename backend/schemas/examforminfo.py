from pydantic import BaseModel, EmailStr, constr, Field
from typing import Optional
from datetime import date
from enum import Enum

# Enums for Pydantic
class LanguageEnum(str, Enum):
    english = "English"
    nepali = "Nepali"
    hindi = "Hindi"

class OccupationEnum(str, Enum):
    government = "Government"
    private = "Private"
    self_employed = "Self Employed"
    student = "Student"
    unemployed = "Unemployed"

class MarriageStatusEnum(str, Enum):
    married = "Married"
    single = "Single"
    divorced = "Divorced"
class PhysicalDisorderEnum(str, Enum):
    yes = "Yes"
    no = "No"
# Base Schema
class ExamFormBase(BaseModel):
    first_name: str
    middle_name: Optional[str] = None
    last_name: str
    dob_ad: date
    dob_bs: Optional[str] = None
    gender: str
    father_name: str
    mother_name: str
    grandfather_name: str
    spouse_name: Optional[str] = None
    citizen_number: str
    issue_district: str
    issue_date: date
    email: EmailStr
    phone_number: str
    caste: Optional[str] = None
    religion: Optional[str] = None
    marriage_status: MarriageStatusEnum = MarriageStatusEnum.single
    language: LanguageEnum = LanguageEnum.english
    occupation: OccupationEnum = OccupationEnum.unemployed
    physical_disorder: PhysicalDisorderEnum = PhysicalDisorderEnum.no

    class Config:
        orm_mode = True
        from_attributes = True

# Schema for creation
class ExamFormCreate(ExamFormBase):
    pass
# Schema for reading
class ExamFormRead(ExamFormBase):
    id: int

# Schema for updating
class ExamFormUpdate(BaseModel):
    first_name: Optional[str] = None
    middle_name: Optional[str] = None
    last_name: Optional[str] = None
    dob_ad: Optional[date] = None
    dob_bs: Optional[str] = None
    gender: Optional[str] = None
    father_name: Optional[str] = None
    mother_name: Optional[str] = None
    grandfather_name: Optional[str] = None
    spouse_name: Optional[str] = None
    citizen_number: Optional[str] = None
    issue_district: Optional[str] = None
    issue_date: Optional[date] = None
    email: Optional[EmailStr] = None
    phone_number: Optional[str] = None
    caste: Optional[str] = None
    religion: Optional[str] = None
    marriage_status: Optional[MarriageStatusEnum] = None
    language: Optional[LanguageEnum] = None
    occupation: Optional[OccupationEnum] = None
    physical_disorder: Optional[str] = None

    class Config:
        orm_mode = True
        from_attributes = True
