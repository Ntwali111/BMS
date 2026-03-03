import { PartialType } from "@nestjs/mapped-types";
import { CreateBondDto } from "./create-bond.dto";
import { IsEnum, IsOptional } from "class-validator";
import { BondStatus } from "../entities/bond.entity";

export class UpdateBondDto extends PartialType(CreateBondDto) {
  @IsOptional()
  @IsEnum(BondStatus)
  status?: BondStatus;
}
