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
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from 'src/doctors/entities/doctor.entity';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    return await this.doctorsService.create(createDoctorDto);
  }

  @Get()
  async findAll() {
    return await this.doctorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.doctorsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ): Promise<Doctor> {
    return await this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.doctorsService.remove(id);
  }
}
