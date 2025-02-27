import path from 'path';
import {config} from "dotenv";
config({
    
})

export default {
    earlyAccess: true,
    schema: {
        kind: "single",
        filePath: path.join(__dirname, 'prisma', 'schema.prisma'),
        env: {
            DIRECT_URL: process.env.development.DIRECT_URL,
        }
    }
};