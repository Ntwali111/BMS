import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { TrainingsService } from "./trainings.service";
import { CreateTrainingDto } from "./dto/create-training.dto";
import { UpdateTrainingDto } from "./dto/update-training.dto";

@Controller("trainings")
export class TrainingsController {
  constructor(private readonly trainingsService: TrainingsService) {}

  @Post()
  create(@Body() dto: CreateTrainingDto) {
    return this.trainingsService.create(dto);
  }

  @Get()
  findAll() {
    return this.trainingsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.trainingsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateTrainingDto) {
    return this.trainingsService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.trainingsService.remove(id);
  }
}
