import bcrypt from 'bcryptjs';
import { AppError } from '../errors/AppError.js';
import { usersRepository } from '../repositories/users.repository.js';

export const authService = {
  async login({ email, password }, req) {
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

    req.session.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      user: req.session.user,
    };
  },

  logout(req) {
    return new Promise((resolve, reject) => {
      if (!req.session) {
        resolve();
        return;
      }

      req.session.destroy((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  },
};
