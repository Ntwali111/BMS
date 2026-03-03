import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { BondsService } from "./bonds.service";
import { CreateBondDto } from "./dto/create-bond.dto";

@Controller("bonds")
export class BondsController {
  constructor(private readonly bondsService: BondsService) {}

  @Post()
  create(@Body() dto: CreateBondDto, @Req() req: any) {
    // supports different jwt payload shapes:
    const userId = req.user?.sub || req.user?.id || req.user?.userId;
    return this.bondsService.create(dto, userId);
  }

  @Get()
  findAll() {
    return this.bondsService.findAll();
  }
}
