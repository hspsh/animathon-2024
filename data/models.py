from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, Integer, Float, String, DateTime, Enum
from datetime import datetime


class VehicleTypeEnum(Enum):
    TRAM = "TRAM"
    BIKE = "BIKE"


class BaseVehicle(DeclarativeBase):
    pass


class Vehicle(BaseVehicle):
    __tablename__ = "vehicle"

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(String)
    vehicle_type = Column(String, nullable=False)
    lat = Column(Float, nullable=False)
    lon = Column(Float, nullable=False)
    timestamp = Column(DateTime, nullable=True)
    direction = Column(Integer, nullable=True)

    def to_dict(self) -> dict:
        return {
            "vehicle_id": self.vehicle_id,
            # "vehicle_type": self.vehicle_type,
            "lat": self.lat,
            "lon": self.lon,
        }
