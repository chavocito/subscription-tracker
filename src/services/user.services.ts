import { UserModel } from '../../prisma/zod';
import { Prisma, PrismaClient } from '@prisma/client';

export default class UserServices {
    constructor(private readonly prisma: PrismaClient) {}

    async createUser(data: unknown): Promise<void> {
        const validatedUser = UserModel.parse(data);
        return this.prisma.user.create({ data: validatedUser });
    }

    async updateUser(id: string, data: unknown ): Promise<void> {
        // Update an existing user
        const validatedData = UserModel.parse(data);
        return this.prisma.user.update({ where: { id }, data: validatedData });
    }

    async deleteUser(id: string): Promise<void> {
        // Delete a user
        return this.prisma.user.delete({ where: { id } });
    }

    async getUser(id: string): Promise<void> {
        // Get a user
        return this.prisma.user.findUnique({ where: { id } });
    }

    async getUsers(): Promise<void> {
        // Get all users
        return this.prisma.user.findMany();
    }
}