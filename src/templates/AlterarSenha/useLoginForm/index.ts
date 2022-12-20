import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Inputs, validation } from './validate'
import { useRouter } from 'next/router'
import AuthService from '@services/user'
import { DtoErrorLoginResponse } from '@services/user/dtoResponses'

const useLoginForm = () => {
  const router = useRouter()
  const [error, setError] = React.useState<string | undefined>()

  const form = useForm<Inputs>({
    resolver: yupResolver(validation),
    mode: 'onBlur'
  })

  const submitForm: SubmitHandler<Inputs> = React.useCallback(async data => {
    try {
      setError('')
      await AuthService.atualizarSenha(data.id, data.password, data.token)
      router.reload()
    } catch (error) {
      const res = error as unknown as DtoErrorLoginResponse
      setError(res.response.data.msg)
    }
  }, [])

  return {
    ...form,
    submitForm,
    error
  }
}

export default useLoginForm
