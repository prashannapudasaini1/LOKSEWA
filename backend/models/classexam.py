from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, DECIMAL, Text, Date
from backend.database import Base
from sqlalchemy.orm import relationship
from datetime import datetime
from enum import Enum as PyEnum
import enum

class ClassExam(Base):
    __tablename__ = "classexams"

    id = Column(Integer, primary_key=True, index=True)
    class_level = Column(Integer, nullable=False)
    exam_name = Column(String(255), nullable=False)
    exam_date = Column(Date, nullable=False)
    registration_start_date = Column(Date, nullable=False)
    registration_end_date = Column(Date, nullable=False)
    fee = Column(DECIMAL(10, 2), nullable=False)
    status = Column(String(20), default="scheduled")

    applications = relationship("Application", back_populates="classexam")