import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Patient } from '../../patients/entities/patient.entity';
import { Doctor } from '../../doctors/entities/doctor.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  date: Date;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments, { eager: true, nullable: true})
  doctor: Doctor;

  @ManyToOne(() => Patient, (patient) => patient.appointments, { eager: true, nullable: true })
  patient: Patient;
}
