import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Car } from "./Car";

@Entity("photos")
class Photo {
  @PrimaryColumn()
  id: string;

  @Column()
  car_id: string;

  @Column()
  photo: string;

  @OneToOne(type => Car, car => car.photos)
  @JoinColumn({name: 'car_id'})
  car: Car;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Photo };
