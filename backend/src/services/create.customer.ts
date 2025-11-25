import prismaClient from "../prisma/index.js"

// name e email como propriedade
interface CreateCustomerProps {
    name: string
    email: string
}

class CreateCustomer {

    // chama as props como parâmetros da função
    async execute({name, email}: CreateCustomerProps) {
        
        // validação de preenchimento
        if (!name || !email) {
            throw new Error("Preencha todos os campos!")
        }
        
        // criação dos dados de customer
        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        // retorna esses dados
        return customer
    }
}

export { CreateCustomer }