import { Injectable } from '@nestjs/common';
import { CreateAvailDto } from './dto/create-avail.dto';
import { UpdateAvailDto } from './dto/update-avail.dto';

@Injectable()
export class AvailsService {
  create(createAvailDto: CreateAvailDto) {
    return 'This action adds a new avail';
  }

  findAll() {
    return `This action returns all avails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avail`;
  }

  update(id: number, updateAvailDto: UpdateAvailDto) {
    return `This action updates a #${id} avail`;
  }

  remove(id: number) {
    return `This action removes a #${id} avail`;
  }
}
