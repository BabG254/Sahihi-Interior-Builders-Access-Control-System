import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}