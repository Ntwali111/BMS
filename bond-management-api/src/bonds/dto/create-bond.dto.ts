import {
  IsUUID,
  IsInt,
  Min,
  IsDateString,
  IsOptional,
  IsNumberString,
  IsString,
} from "class-validator";

export class CreateBondDto {
  @IsUUID()
  employeeId: string;

  @IsOptional()
  @IsUUID()
  trainingId?: string;

  @IsNumberString()
  bondValue: string;

  @IsInt()
  @Min(1)
  bondDurationMonths: number;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsString()
  documentUrl?: string;
}
