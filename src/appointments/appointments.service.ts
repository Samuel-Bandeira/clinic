import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApointmentsService {
  constructor(@InjectRepository(Appointment) private readonly appointmentRepository : Repository<Appointment>) {}
  create(createApointmentDto: CreateAppointmentDto) {
    //data/doutor/pacienteId
    const appointment = new Appointment()
    appointment.date = new Date();
    appointment.doctor = createApointmentDto.doctor;
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
