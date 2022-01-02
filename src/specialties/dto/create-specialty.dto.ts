import { IsAlpha, Length, Max, Min } from 'class-validator';

export class CreateSpecialtyDto {
  @IsAlpha()
  @Length(0, 256)
  name: string;
}

export class findSpecialtyDto {
  name: string;
}
