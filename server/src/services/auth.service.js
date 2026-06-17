import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/AppError.js';
import { JWT_EXPIRES_IN, JWT_SECRET } from '../config/auth.config.js';
import { usersRepository } from '../repositories/users.repository.js';

export const authService = {
  async login({ email, password }) {
    if (!email || !password) {
      throw new AppError('Email and password are required', 400);
    }

    const user = usersRepository.findByEmail(email.trim());
    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401);
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    return {
      token,
      expiresIn: JWT_EXPIRES_IN,
      user: { id: user.id, email: user.email, role: user.role },
    };
  },
};
