import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from './auth.entity';
import { UsersEntity } from '../users/users.entity';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity) private authRepo: Repository<AuthEntity>,
    @InjectRepository(UsersEntity) private usersRepo: Repository<UsersEntity>,
    private rolesService: RolesService,
  ) {}

  async login(username: string, password: string) {
    // Implement login logic
  }

  async register(body: any) {
    // Implement registration logic
  }

  async validateUser(username: string, password: string) {
    // Implement user validation
  }

  async getCurrentUser(userId: number) {
    // Implement get current user logic
  }
}
