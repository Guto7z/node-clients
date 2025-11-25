import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateCostumerController } from "./controllers/customer.controller.js"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    // GET
    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumerController().list(reply)
    })

    // GET Id
    fastify.get("/customer/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumerController().list_id(request, reply)
    })

    // POST
    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {

        // retorna o controller e passa os parâmetros
        return new CreateCostumerController().handle(request, reply)
    })

    // PUT
    fastify.put("/customer/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumerController().update(request, reply)
    })

    // DELETE
    fastify.delete("/customer/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumerController().delete(request, reply)
    })
}