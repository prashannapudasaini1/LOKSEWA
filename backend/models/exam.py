from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, DECIMAL, Text, Date
from backend.database import Base
from sqlalchemy.orm import relationship
from datetime import datetime
from enum import Enum as PyEnum
import enum

class Exam(Base):
    __tablename__ = "exams"

    id = Column(Integer, primary_key=True, index=True)
    exam_name = Column(String(255))
    exam_class_level = Column(Integer)
    service_group__name = Column(String(100))
    application_start_date = Column(Date)
    application_end_date = Column(Date)
    exam_date = Column(Date)
    exam_center = Column(String(100))
    fee = Column(DECIMAL(10, 2))
    status = Column(String(20), default="open")

    applications = relationship("Application", back_populates="exam")
