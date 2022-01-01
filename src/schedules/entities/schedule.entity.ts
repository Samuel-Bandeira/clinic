import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'time' })
  startHour: Date;

  @Column({ type: 'time' })
  endHour: Date;

  @Column()
  appointmentDuration: number;
  //Um usuário pode ter vários appointmnets porém cada appointment só tem 1 usuário.

  @ManyToOne(() => Doctor, (doctor) => doctor.schedules)
  doctor: Doctor;
}
