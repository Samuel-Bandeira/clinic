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
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
    return await this.patientsService.create(createPatientDto);
  }

  @Get()
  async findAll() {
    return await this.patientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.patientsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return await this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.patientsService.remove(id);
  }
}
