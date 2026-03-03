import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Bond, BondStatus } from "./entities/bond.entity";
import { CreateBondDto } from "./dto/create-bond.dto";
import { Employee } from "../employees/entities/employee.entity";
import { Training } from "../trainings/entities/training.entity";
import { User } from "../users/entities/user.entity";

function addMonths(dateStr: string, months: number): string {
  const d = new Date(dateStr);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();
  const day = d.getUTCDate();

  const target = new Date(Date.UTC(y, m + months, day));

  // handle e.g. Jan 31 + 1 month
  if (target.getUTCDate() !== day) target.setUTCDate(0);

  return target.toISOString().slice(0, 10);
}

@Injectable()
export class BondsService {
  constructor(
    @InjectRepository(Bond) private bondRepo: Repository<Bond>,
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(Training) private trainingRepo: Repository<Training>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateBondDto, userId: string) {
    const employee = await this.employeeRepo.findOne({
      where: { id: dto.employeeId },
    });
    if (!employee) throw new NotFoundException("Employee not found");

    const training = dto.trainingId
      ? await this.trainingRepo.findOne({ where: { id: dto.trainingId } })
      : null;
    if (dto.trainingId && !training)
      throw new NotFoundException("Training not found");

    const createdBy = await this.userRepo.findOne({ where: { id: userId } });
    if (!createdBy) throw new NotFoundException("User not found");

    const expiryDate = addMonths(dto.startDate, dto.bondDurationMonths);

    const bond = this.bondRepo.create({
      employee,
      training,
      bondValue: dto.bondValue,
      bondDurationMonths: dto.bondDurationMonths,
      startDate: dto.startDate,
      expiryDate,
      status: BondStatus.ACTIVE,
      documentUrl: dto.documentUrl ?? null,
      createdBy,
    });

    return this.bondRepo.save(bond);
  }

  async findAll() {
    return this.bondRepo.find({ order: { createdAt: "DESC" } });
  }
}
