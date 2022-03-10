import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  listByUpdated(date: number): Promise<Car[]>;
  listByCreated(date: number): Promise<Car[]>;
  findById(id: string): Promise<Car>;
  listAll(): Promise<Car[]>;
}

export { ICarsRepository };
