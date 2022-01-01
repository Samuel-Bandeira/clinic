import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Doctor } from '../../doctors/entities/doctor.entity';

@Entity()
export class Specialty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Doctor, (doctor) => doctor.specialties)
  doctors: Doctor[];
}
