from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, DECIMAL, Text, Date
from backend.database import Base
from sqlalchemy.orm import relationship
from datetime import datetime
from enum import Enum as PyEnum
import enum
# 6️⃣ Document Table
class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    application_id = Column(Integer, ForeignKey("applications.id"))
    doc_type = Column(String(50))
    file_url = Column(String(255))
    uploaded_at = Column(DateTime, default=datetime.utcnow)

    application = relationship("Application", back_populates="documents")
