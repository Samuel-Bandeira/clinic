import { Module } from '@nestjs/common';
import { ApointmentsService } from './appointments.service';
import { ApointmentsController } from './appointments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Patient } from '../patients/entities/patient.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment]),
    TypeOrmModule.forFeature([Doctor]),
    TypeOrmModule.forFeature([Patient]),
  ],
  controllers: [ApointmentsController],
  providers: [ApointmentsService],
})
export class ApointmentsModule {}
