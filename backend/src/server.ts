import Fastify from 'fastify'
import { routes } from './routes.js'
import cors from '@fastify/cors'


// Inicializa o fastify
const app = Fastify({ logger: true})

// Função para inicializar na port: 3333
const start = async () => {

    await app.register(cors)
    await app.register(routes)

    try {
        await app.listen({port: 3333})

    } catch (err) {
        process.exit(1)
    }
}

start();