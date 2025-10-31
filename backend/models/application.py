# 5️⃣ Application Table
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, DECIMAL, Text, Date
from backend.database import Base
from sqlalchemy.orm import relationship
from datetime import datetime
from enum import Enum as PyEnum
import enum

class ApplicationStatus(str, enum.Enum):
    submitted = "submitted"
    verified = "verified"
    rejected = "rejected"
    accepted = "accepted"
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
    