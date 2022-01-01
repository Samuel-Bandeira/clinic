import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('apointments')
export class ApointmentsController {
  constructor(private readonly apointmentsService: ApointmentsService) {}

  @Post()
  create(@Body() createApointmentDto: CreateAppointmentDto) {
    return this.apointmentsService.create(createApointmentDto);
  }

  @Get()
  findAll() {
    return this.apointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apointmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApointmentDto: UpdateAppointmentDto) {
    return this.apointmentsService.update(+id, updateApointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apointmentsService.remove(+id);
  }
}