import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailDto } from './create-avail.dto';

export class UpdateAvailDto extends PartialType(CreateAvailDto) {}
