import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
    email: z.string().min(1, 'E-mail é obrigatório').email('E-mail inv[alido'),
    phone: z.string().min(14, 'Telefone inválido')
})

export type FormSchemaData = z.infer<typeof formSchema> & {
    [key: string]: string
}