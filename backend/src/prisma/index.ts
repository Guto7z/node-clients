import { PrismaClient } from "@prisma/client";

// Inicalizamos o clietn prisma para (ORM)
const prismaClient = new PrismaClient();

export default prismaClient