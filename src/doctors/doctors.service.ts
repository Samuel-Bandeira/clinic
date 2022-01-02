import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';
import { Specialty } from '../specialties/entities/specialty.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor) private doctorRepository: Repository<Doctor>,
    @InjectRepository(Specialty)
    private specialtyRepository: Repository<Specialty>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto) {
    const specialties: Specialty[] = await this.specialtyRepository.findByIds(
      createDoctorDto.specialties,
    );

    const doctor = this.doctorRepository.create({
      name: createDoctorDto.name,
      crm: createDoctorDto.crm,
      specialties: specialties,
    });

    return this.doctorRepository.save(doctor);
  }

  findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find();
  }

  findOne(id: number): Promise<Doctor> {
    return this.doctorRepository.findOne(id);
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
    //name/crm/specialties
    const doctor = await this.doctorRepository.findOne(id);

    if (updateDoctorDto.crm) {
      doctor.crm = updateDoctorDto.crm;
    }

    if (updateDoctorDto.name) {
      doctor.name = updateDoctorDto.name;
    }

    if (updateDoctorDto.specialties) {
      const specialties: Specialty[] = await this.specialtyRepository.findByIds(
        updateDoctorDto.specialties,
      );
      doctor.specialties = specialties;
    }

    return this.doctorRepository.save(doctor);
  }

  async remove(id: number) {
    const doctor = await this.doctorRepository.findOne(id);
    return this.doctorRepository.remove(doctor);
  }
}
