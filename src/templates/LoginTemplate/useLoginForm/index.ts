import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { setCookie } from 'nookies'

import { Inputs, isEmail, validation } from './validate'
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

  const submitForm: SubmitHandler<Inputs> = React.useCallback(
    async data => {
      try {
        setError('')
        const response = await AuthService.login(data.name, data.password)
        if (!response.token) throw new Error()

        setCookie(null, 'token', response.token, {
          maxAge: 60 * 60 * 24 * 30
        })
        router.replace('/')
      } catch (error) {
        const res = error as unknown as DtoErrorLoginResponse
        setError(res.response.data.msg)
      }
    },
    [router]
  )

  return {
    ...form,
    submitForm,
    error
  }
}

export default useLoginForm
