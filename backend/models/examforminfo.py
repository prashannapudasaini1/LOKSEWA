from sqlalchemy import Column, Integer, String, Date, DateTime,ForeignKey
from sqlalchemy.orm import relationship, Mapped, mapped_column
from datetime import datetime
from backend.database import Base


class ExamForm(Base):
    __tablename__ = "exam_form"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(Integer,ForeignKey("user.id"), nullable=False)
    # Personal Information
    first_name: Mapped[str] = mapped_column(String, nullable=False)
    middle_name: Mapped[str] = mapped_column(String, nullable=True)
    last_name: Mapped[str] = mapped_column(String, nullable=False)
    dob_ad: Mapped[Date] = mapped_column(Date, nullable=False)  # AD date
    dob_bs: Mapped[str] = mapped_column(String, nullable=True)  # BS date as string
    gender: Mapped[str] = mapped_column(String, nullable=False)
    father_name: Mapped[str] = mapped_column(String, nullable=False)
    mother_name: Mapped[str] = mapped_column(String, nullable=False)
    grandfather_name: Mapped[str] = mapped_column(String, nullable=False)
    spouse_name: Mapped[str] = mapped_column(String, nullable=True)
    citizen_number: Mapped[str] = mapped_column(String, nullable=False)
    issue_district: Mapped[str] = mapped_column(String, nullable=False)
    issue_date: Mapped[Date] = mapped_column(Date, nullable=False)
    email: Mapped[str] = mapped_column(String, nullable=False, unique=True)
    phone_number: Mapped[str] = mapped_column(String, nullable=False)

    # Additional Information
    caste: Mapped[str] = mapped_column(String, nullable=True)
    religion: Mapped[str] = mapped_column(String, nullable=True)
    marriage_status: Mapped[str] = mapped_column(String, nullable=False)
    language: Mapped[str] = mapped_column(String, nullable=False)
    occupation: Mapped[str] = mapped_column(String, nullable=False)
    physical_disorder: Mapped[str] = mapped_column(String, nullable=True)

    created_at: Mapped[DateTime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[DateTime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<ExamForm(id={self.id}, name={self.first_name} {self.last_name})>"
