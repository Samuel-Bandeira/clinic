import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';
@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const patient = new Patient();
    patient.name = createPatientDto.name;
    patient.cpf = createPatientDto.cpf;

    return await this.patientRepository.save(patient);
  }

  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.find();
  }

  findOne(id: number) {
    return this.patientRepository.findOne(id);
  }

  async update(
    id: number,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    const patient = await this.patientRepository.findOne(id);
    if (updatePatientDto.name) {
      patient.name = updatePatientDto.name;
    }
    if (updatePatientDto.cpf) {
      patient.cpf = updatePatientDto.cpf;
    }

    return this.patientRepository.save(patient);
  }

  async remove(id: number): Promise<Patient> {
    const patient = await this.patientRepository.findOne(id);
    return this.patientRepository.remove(patient);
  }
}
