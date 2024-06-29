from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from models import Vehicle
from pathlib import Path

from typing import List
import json

engine = create_engine("sqlite:///sqlite.db")


def create_database():
    print("Create database")
    Vehicle.metadata.create_all(engine)


def dump_database():
    dump_filepath = Path("dump.json")
    print(f"Dump database to {dump_filepath}")

    data = {}
    with Session(engine) as session:
        timestamps = (
            session.query(Vehicle.timestamp)
            .distinct()
            .order_by(Vehicle.timestamp)
            .all()
        )
        timestamps = [timestamp for timestamp, in timestamps]

        for ts in timestamps:
            bikes_by_timestamp = (
                session.query(Vehicle).filter(Vehicle.timestamp == ts).all()
            )
            data[ts.timestamp()] = [bike.to_dict() for bike in bikes_by_timestamp]

    print(f"Writing dump to file")
    with open(dump_filepath, "w") as file:
        json.dump(data, file)
        # file.write(dump)

    print("Dump done!")


def add_vehicle(vehicle: Vehicle):
    with Session(engine) as session:
        session.add(vehicle)
        session.commit()


def add_vehicles(vehicles: List[Vehicle]):
    with Session(engine) as session:
        session.add_all(vehicles)
        session.commit()
