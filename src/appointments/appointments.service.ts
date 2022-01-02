import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
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

    const appointment = this.appointmentRepository.create({
      date: new Date(),
      doctor: doctor,
      patient: patient,
    });

    return this.appointmentRepository.save(appointment);
  }

  getDoctorAndPatient(appointmentId: number): Promise<Appointment> {
    return this.appointmentRepository.findOne(appointmentId, {
      relations: ['doctor', 'patient'],
    });
  }

  findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find();
  }

  findOne(id: number): Promise<Appointment> {
    return this.appointmentRepository.findOneOrFail(id);
  }

  async update(id: number, updateApointmentDto: UpdateAppointmentDto) {
    const appointment = await this.appointmentRepository.findOneOrFail(id);
    appointment.date = updateApointmentDto.date;

    if (!updateApointmentDto.doctor) {
      const doctor = await this.doctorRepository.findOne(
        updateApointmentDto.doctor,
      );
      appointment.doctor = doctor;
    }

    if (!updateApointmentDto.patient) {
      const patient = await this.patientRepository.findOne(
        updateApointmentDto.patient,
      );

      appointment.patient = patient;
    }

    console.log(updateApointmentDto.doctor);
    return this.appointmentRepository.save(appointment);
  }

  async remove(id: number): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne(id);
    return this.appointmentRepository.remove(appointment);
  }
}
