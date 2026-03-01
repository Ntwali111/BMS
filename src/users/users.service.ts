import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User, UserRole } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return this.usersRepo.findOne({ where: { email } });
  }

  async seedAdmin() {
    const email = 'admin@example.com';
    const password = 'SuperAdmin123!';

    const existing = await this.findByEmail(email);
    if (existing) {
      return { message: 'Super admin already exists' };
    }

    const password_hash = await bcrypt.hash(password, 10);

    const user = this.usersRepo.create({
      email,
      password_hash,
      role: UserRole.ADMIN,
      is_active: true,
    });

    await this.usersRepo.save(user);

    // For development only — remove password from response later.
    return {
      message: 'Admin created successfully',
      credentials: { email, password },
    };
  }
}