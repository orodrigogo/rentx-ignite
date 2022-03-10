import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Car } from "./Car";

@Entity("accessories")
class Accessory {
  @PrimaryColumn()
  id: string;

  @Column()
  car_id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @OneToOne(type => Car, car => car.accessories)
  @JoinColumn({name: 'car_id'})
  car: Car;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Accessory };
