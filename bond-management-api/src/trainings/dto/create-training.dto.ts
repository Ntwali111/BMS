import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  IsNumberString,
} from "class-validator";

export class CreateTrainingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  provider: string;

  @IsNumberString()
  cost: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}
