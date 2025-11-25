import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomer } from "../services/create.customer.js";
import { ListCustomers } from "../services/list.customers.js";
import { UpdateCustomers } from "../services/update.customers.js";
import { DeleteCustomers } from "../services/delete.customers.js";

class CreateCostumerController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        // query params
        const { name, email } = request.body as { name: string, email: string }

        // Inicializo o customerService
        const customerService = new CreateCustomer()

        // chamar seu método
        const customer = await customerService.execute({ name, email })

        // resposta
        reply.send(customer)
    }

    async list(reply: FastifyReply) {

        const customerService = new ListCustomers()

        const customers = await customerService.execute()

        reply.send(customers)
    }

    async list_id(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.params as { id: string }

        const customerService = new ListCustomers()

        const customer = await customerService.execute_id({ id })

        reply.send(customer)
    }

    async update(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.params as { id: string }

        const { name, email, status } = request.body as { name: string, email: string, status: boolean }

        const customerService = new UpdateCustomers()

        const customer = await customerService.execute({id, name, email, status})

        reply.send(customer)
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        
        const {id} = request.params as {id: string}

        const customerService = new DeleteCustomers()

        const customer = await customerService.execute({id})

        reply.send(customer)
    }
}

export { CreateCostumerController }