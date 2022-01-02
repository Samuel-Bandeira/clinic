import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Repository } from 'typeorm';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { Specialty } from './entities/specialty.entity';

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectRepository(Specialty)
    private specilatyRepository: Repository<Specialty>,
  ) {}

  create(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty> {
    const specialty = this.specilatyRepository.create({
      name: createSpecialtyDto.name,
    });

    return this.specilatyRepository.save(specialty);
  }

  findAll(): Promise<Specialty[]> {
    return this.specilatyRepository.find({
      relations: ['doctors'],
    });
  }

  findOne(id: number) {
    return this.specilatyRepository.findOne(id, {
      relations: ['doctors'],
    });
  }

  async update(id: number, updateSpecialtyDto: UpdateSpecialtyDto) {
    const specialty = await this.specilatyRepository.findOne(id);
    specialty.name = updateSpecialtyDto.name;

    return this.specilatyRepository.save(specialty);
  }

  async remove(id: number) {
    const specialty = await this.specilatyRepository.findOne(id);
    return this.specilatyRepository.remove(specialty);
  }
}
