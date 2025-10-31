from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, DECIMAL, Text, Date
from backend.database import Base
from sqlalchemy.orm import relationship
from datetime import datetime
from enum import Enum as PyEnum
import enum

class student_exam_status(str,enum.Enum):
    passed = "passed"
    failed = "failed"
    
class StudentExamResult(Base):
    __tablename__ = "student_exam_results"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    exam_id = Column(Integer, ForeignKey("exams.id"))
    score = Column(DECIMAL(5, 2))
    grade = Column(String(10))
    status = Column(Enum(student_exam_status), default=student_exam_status.passed)
    result_date = Column(DateTime, default=datetime.utcnow)
    user = relationship("User")
    exam = relationship("Exam")