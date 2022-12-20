import * as yup from 'yup'

export const validation = yup.object({
  password: yup.string().required('O Campo não pode estar vazio'),
  token: yup.string().required('O Campo não pode estar vazio'),
  id: yup.number().required('O Campo não pode estar vazio')
})

export interface Inputs extends yup.InferType<typeof validation> {}
