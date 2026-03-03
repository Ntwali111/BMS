import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bond } from "./entities/bond.entity";
import { BondsService } from "./bonds.service";
import { BondsController } from "./bonds.controller";
import { Employee } from "../employees/entities/employee.entity";
import { Training } from "../trainings/entities/training.entity";
import { User } from "../users/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Bond, Employee, Training, User])],
  controllers: [BondsController],
  providers: [BondsService],
})
export class BondsModule {}
