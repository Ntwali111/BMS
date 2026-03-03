import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Training } from "./entities/training.entity";
import { CreateTrainingDto } from "./dto/create-training.dto";
import { UpdateTrainingDto } from "./dto/update-training.dto";

@Injectable()
export class TrainingsService {
  constructor(
    @InjectRepository(Training)
    private trainingRepo: Repository<Training>,
  ) {}

  async create(dto: CreateTrainingDto) {
    const training = this.trainingRepo.create(dto);
    return this.trainingRepo.save(training);
  }

  async findAll() {
    return this.trainingRepo.find({ order: { createdAt: "DESC" } });
  }

  async findOne(id: string) {
    const training = await this.trainingRepo.findOne({ where: { id } });
    if (!training) throw new NotFoundException("Training not found");
    return training;
  }

  async update(id: string, dto: UpdateTrainingDto) {
    const training = await this.findOne(id);
    Object.assign(training, dto);
    return this.trainingRepo.save(training);
  }

  async remove(id: string) {
    const training = await this.findOne(id);
    await this.trainingRepo.remove(training);
    return { message: "Training deleted successfully" };
  }
}
