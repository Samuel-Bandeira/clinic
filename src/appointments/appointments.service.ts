import { Inject, Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Repository } from 'typeorm';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Patient } from '../patients/entities/patient.entity';

@Injectable()
export class ApointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}
  
  async create(
    createApointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    const doctor = await this.doctorRepository.findOneOrFail(
      createApointmentDto.doctor,
    );
    const patient = await this.patientRepository.findOneOrFail(
      createApointmentDto.patient,
    );

    const appointment = new Appointment();
    appointment.date = new Date();
    appointment.doctor = doctor;
    appointment.patient = patient;

    return this.appointmentRepository.save(appointment);
  }

  findAll() {
    return `This action returns all apointments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apointment`;
  }

  update(id: number, updateApointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} apointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} apointment`;
  }
}
