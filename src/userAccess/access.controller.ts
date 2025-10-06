import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AccessService } from './access.service';
import { CreateAccessDto } from './dto/create-access.dto';

@Controller('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Post()
  async create(@Body() createAccessDto: CreateAccessDto) {
    return this.accessService.create(createAccessDto);
  }

  @Get()
  async findAll() {
    return this.accessService.findAll();
  }

  @Get(':id/count')
  async findCount(@Param('id') id: string) {
    return this.accessService.findCount(id);
  }

  @Get(':id')
  async findAccess(@Param('id') id: string) {
    return this.accessService.findAccess(id);
  }

}
