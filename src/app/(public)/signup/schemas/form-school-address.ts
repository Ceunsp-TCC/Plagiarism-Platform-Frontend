import { z } from 'zod'
import { checkIfZipcodeIsValid } from '@/app/(public)/signup/functions'
export const formSchoolAddressSchema = z.object({
  CEP: z
    .string()
    .nonempty('Por favor, insira o cep da escola')
    .regex(new RegExp(/\b\d{5}-?\d{3}\b/), {
      message: 'Por favor, insira um CEP válido',
    })
    .transform((value) => value.replace(/\D/g, ''))
    .refine(async (zipcode) => await checkIfZipcodeIsValid(zipcode), {
      message: 'Por favor, insira um CEP válido',
    }),
  number: z.string().optional(),
  complement: z.string().optional(),
})
