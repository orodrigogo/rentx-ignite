import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Accessory } from "./Accessory";

import { Photo } from './Photo';

@Entity("cars")
class Car {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  about: string;

  @Column()
  period: string;

  @Column()
  price: number;

  @Column()
  fuel_type: string;

  @Column()
  thumbnail: string;

  @OneToMany(() => Photo, photo => photo.car)
  @JoinColumn({ name: 'id' })
  photos: Photo[];

  @OneToMany(() => Accessory, accessory => accessory.car)
  @JoinColumn({ name: 'id' })
  accessories: Accessory[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car };
