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


class ApplicationStatus(str, enum.Enum):
    submitted = "submitted"
    verified = "verified"
    rejected = "rejected"
    accepted = "accepted"


class PaymentStatus(str, enum.Enum):
    pending = "pending"
    success = "success"
    failed = "failed"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    role = Column(String(20), default="applicant")
    created_at = Column(DateTime, default=datetime.utcnow)

    profile = relationship("ApplicantProfile", back_populates="user", uselist=False)
    applications = relationship("Application", back_populates="user")


# 3️⃣ Applicant Profile
class ApplicantProfile(Base):
    __tablename__ = "applicant_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    full_name = Column(String(100))
    date_of_birth = Column(Date)
    gender = Column(Enum(GenderEnum))
    citizenship_no = Column(String(50))
    citizenship_issue_district = Column(String(100))
    address = Column(String(255))
    phone = Column(String(20))
    education_level = Column(String(100))
    photo_url = Column(String(255))
    signature_url = Column(String(255))

    user = relationship("User", back_populates="profile")


# 4️⃣ Exam Table
class Exam(Base):
    __tablename__ = "exams"

    id = Column(Integer, primary_key=True, index=True)
    exam_name = Column(String(255))
    service_group = Column(String(100))
    level = Column(String(50))
    application_start_date = Column(Date)
    application_end_date = Column(Date)
    exam_date = Column(Date)
    exam_center = Column(String(100))
    fee = Column(DECIMAL(10, 2))
    status = Column(String(20), default="open")

    applications = relationship("Application", back_populates="exam")


# 5️⃣ Application Table
class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    exam_id = Column(Integer, ForeignKey("exams.id"))
    application_date = Column(DateTime, default=datetime.utcnow)
    status = Column(Enum(ApplicationStatus), default=ApplicationStatus.submitted)
    remarks = Column(Text, nullable=True)
    admit_card_url = Column(String(255), nullable=True)

    user = relationship("User", back_populates="applications")
    exam = relationship("Exam", back_populates="applications")
    documents = relationship("Document", back_populates="application")
    payment = relationship("Payment", back_populates="application", uselist=False)


# 6️⃣ Document Table
class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    application_id = Column(Integer, ForeignKey("applications.id"))
    doc_type = Column(String(50))
    file_url = Column(String(255))
    uploaded_at = Column(DateTime, default=datetime.utcnow)

    application = relationship("Application", back_populates="documents")


# 7️⃣ Payment Table
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