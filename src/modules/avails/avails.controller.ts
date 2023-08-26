import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvailsService } from './avails.service';
import { CreateAvailDto } from './dto/create-avail.dto';
import { UpdateAvailDto } from './dto/update-avail.dto';

@Controller('avails')
export class AvailsController {
  constructor(private readonly availsService: AvailsService) {}

  @Post()
  create(@Body() createAvailDto: CreateAvailDto) {
    return this.availsService.create(createAvailDto);
  }

  @Get()
  findAll() {
    return this.availsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.availsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvailDto: UpdateAvailDto) {
    return this.availsService.update(+id, updateAvailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.availsService.remove(+id);
  }
}
