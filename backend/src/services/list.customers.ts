import prismaClient from "../prisma/index.js";

interface ListCustomersProps {
    id: string
}

class ListCustomers {

    async execute() {

        const customers = await prismaClient.customer.findMany()

        return customers
    }

    async execute_id({id}: ListCustomersProps) {
        
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: id
            }
        })

        return customer
    }
}

export { ListCustomers }