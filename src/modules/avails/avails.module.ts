import { Module } from '@nestjs/common';
import { AvailsService } from './avails.service';
import { AvailsController } from './avails.controller';

@Module({
  controllers: [AvailsController],
  providers: [AvailsService],
})
export class AvailsModule {}
