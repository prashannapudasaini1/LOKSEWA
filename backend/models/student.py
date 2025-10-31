from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, DECIMAL, Text, Date
from backend.database import Base
from sqlalchemy.orm import relationship
from datetime import datetime
from enum import Enum as PyEnum
import enum

class GenderEnum(str, enum.Enum):
    male = "Male"
    female = "Female"
    other = "Other"

class PaymentStatus(str, enum.Enum):
    pending = "pending"
    success = "success"
    failed = "failed"
    
class Studentinfo(Base):
    __tablename__ = "stduentsinfo"

    id = Column(Integer, primary_key=True, index=True)
    firstname=Column(String(50), nullable=False)
    second_name=Column(String(50), nullable=True)
    lastname=Column(String(50), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    gender = Column(Enum(GenderEnum))
    citizenship_no = Column(String(50))
    citizenship_issue_district = Column(String(100))
    symbol_number = Column(String(50), unique=True, nullable=True)
    phone = Column(String(20))
    education_level = Column(String(100))
    photo_url = Column(String(255))
    signature_url = Column(String(255))
    role = Column(String(20), default="applicant")
    created_at = Column(DateTime, default=datetime.utcnow)

    profile = relationship("ApplicantProfile", back_populates="user", uselist=False)
    applications = relationship("Application", back_populates="user")


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    application_id = Column(Integer, ForeignKey("applications.id"))
    amount = Column(DECIMAL(10, 2))
    method = Column(String(50))
    transaction_id = Column(String(100))
    payment_status = Column(Enum(PaymentStatus), default=PaymentStatus.pending)
    paid_at = Column(DateTime, default=datetime.utcnow)

    application = relationship("Application", back_populates="payment")