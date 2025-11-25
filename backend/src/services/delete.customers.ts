import prismaClient from "../prisma/index.js";

interface DeleteCustomersProps {
    id: string
}

class DeleteCustomers {

    async execute({ id }: DeleteCustomersProps) {

        await prismaClient.customer.delete({
            where: { id }
        })

        return { "message": "Usuário deletado com sucesso." }
    }
}

export { DeleteCustomers }