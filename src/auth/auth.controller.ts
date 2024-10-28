import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    // Implement login logic
  }

  @Post('register')
  async register(@Body() body: any) {
    // Implement registration logic
  }
}