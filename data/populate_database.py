import os, pathlib, json
from db import add_vehicles, create_database
from models import Vehicle, VehicleTypeEnum
from datetime import datetime
from datetime import datetime


def load_trams() -> None:
    print("Loading Trams")
    vehicles = []
    for root, dirs, files in os.walk(pathlib.Path("./data/ztm")):
        for file in files:
            filepath = pathlib.Path(root) / file
            print("Loading file:", filepath)
            with open(filepath, encoding="utf-8") as f:
                if os.stat(filepath).st_size == 0:
                    # print("File is empty. Skipping..")
                    continue

                json_file = json.load(f)
                for json_vehicle in json_file["vehicles"]:
                    vehicle = Vehicle(
                        vehicle_id=str(json_vehicle["vehicleId"]),
                        vehicle_type=VehicleTypeEnum.TRAM,
                        lat=json_vehicle["lat"],
                        lon=json_vehicle["lon"],
                        direction=json_vehicle["direction"],
                        timestamp=(
                            datetime.strptime(
                                json_vehicle["scheduledTripStartTime"],
                                "%Y-%m-%dT%H:%M:%SZ",
                            )
                            if json_vehicle["scheduledTripStartTime"]
                            else None
                        ),
                    )
                    vehicles.append(vehicle)
    add_vehicles(vehicles)


def load_mevo_bikes() -> None:
    print("Loading MEVO bikes")
    bikes = []
    for root, dirs, files in os.walk(pathlib.Path("./data/mevo")):
        for file in files:
            if "station" in file:
                # print("Skip station file")
                continue

            filepath = pathlib.Path(root) / file
            print("Loading file:", filepath)
            with open(filepath, encoding="utf-8") as f:
                if os.stat(filepath).st_size == 0:
                    print("File is empty. Skipping..")
                    continue

                json_file = json.load(f)
                for json_vehicle in json_file["data"]["bikes"]:
                    bike = Vehicle(
                        vehicle_id=str(json_vehicle["bike_id"]),
                        vehicle_type=VehicleTypeEnum.BIKE,
                        lat=json_vehicle["lat"],
                        lon=json_vehicle["lon"],
                        direction=None,
                        timestamp=(
                            datetime.fromtimestamp(json_vehicle["last_reported"])
                            if json_vehicle["last_reported"]
                            else None
                        ),
                    )
                    bikes.append(bike)
    add_vehicles(bikes)


if __name__ == "__main__":
    create_database()
    print("--- Start populating the database ---")
    start = datetime.now()
    # load_trams()
    load_mevo_bikes()
    stop = datetime.now()
    time_diff = stop - start
    print(f"--- Done! Took {time_diff.seconds} seconds ---")
