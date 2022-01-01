import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { PatientsModule } from './patients/patients.module';
import { ApointmentsModule } from './appointments/appointments.module';
import { SchedulesModule } from './schedules/schedules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patients/entities/patient.entity';
import { Doctor } from './doctors/entities/doctor.entity';
import { Schedule } from './schedules/entities/schedule.entity';
import { Specialty } from './specialties/entities/specialty.entity';
import { Appointment } from './appointments/entities/appointment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'samuel',
      password: 'js13092002',
      database: 'clinica',
      entities: [Patient, Doctor, Schedule, Specialty, Appointment],
      synchronize: true,
    }),
    DoctorsModule,
    SpecialtiesModule,
    PatientsModule,
    ApointmentsModule,
    SchedulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
