import { defineConfig } from "@prisma/config";
import dotenv from "dotenv"

dotenv.config() // Carregar o .env manualmente


export default defineConfig({
  schema: "./prisma/schema.prisma",

  // Desativa Shadow Database (pois seu usuário não pode criar DB)
  migrate: {
    shadowDatabaseUrl: null,
  },

  client: {
    adapter: "postgresql",
  },
});
