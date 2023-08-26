import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ProgramsModule } from './modules/programs/programs.module';
import { AvailsModule } from './modules/avails/avails.module';

@Module({
  imports: [UsersModule, ProgramsModule, AvailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
