import { Request, Response } from 'express';
import { scrypt, randomBytes, timingSafeEqual } from "crypto";

export default class AuthenticationController {
    async signUp(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

    }

    async hashPassword(password: string): Promise<void> {
        const salt = randomBytes(8).toString('hex');
        return scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) throw err;
            return `${salt}?>${derivedKey.toString('hex')}`;
        });
    }

    async verifyPassword(password: string, hash: string): Promise<void> {
        const [salt, key] = hash.split('?>');
        return scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) throw err;
            return timingSafeEqual(Buffer.from(key, 'hex'), derivedKey);
        });
    }
}