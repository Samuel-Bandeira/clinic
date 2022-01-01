import { IsAlpha, IsArray, IsString, Length } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @Length(0, 256)
  name: string;

  @IsString()
  @Length(0, 256)
  crm: string;

  @IsArray()
  specialties: number[];
}
