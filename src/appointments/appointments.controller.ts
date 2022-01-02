import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from 'src/appointments/entities/appointment.entity';

@Controller('appointments')
export class ApointmentsController {
  constructor(private readonly apointmentsService: ApointmentsService) {}

  @Post()
  create(
    @Body() createApointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    return this.apointmentsService.create(createApointmentDto);
  }

  @Get()
  async findAll(): Promise<Appointment[]> {
    return await this.apointmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Appointment> {
    return await this.apointmentsService.findOne(id);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() updateApointmentDto: UpdateAppointmentDto,
  ) {
    return await this.apointmentsService.update(id, updateApointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apointmentsService.remove(+id);
  }

  @Get('/:appointmentId/doctor/patient')
  async getDoctorAndPatient(
    @Param('appointmentId') appointmentId: number 
  ) {
    return await this.apointmentsService.getDoctorAndPatient(appointmentId)
  }
}
