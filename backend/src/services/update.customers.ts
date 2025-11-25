import prismaClient from "../prisma/index.js";


interface UpdateCustomersProps {
    id: string
    name: string
    email: string
    status: boolean
}

class UpdateCustomers {

    async execute({ id, name, email, status }: UpdateCustomersProps) {

        const customer = await prismaClient.customer.update({
            where: { id },
            data: {
                name,
                email,
                status
            }
        })

        return customer
    }
}

export { UpdateCustomers }