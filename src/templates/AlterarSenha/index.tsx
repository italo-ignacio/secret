import { User } from '@shared/interfaces'
import { useEffect } from 'react'
import styles from './styles.module.css'
import useLoginForm from './useLoginForm'

interface AlterarSenhaProps {
  user: User
  token: string
}
const AlterarSenha = (props: AlterarSenhaProps) => {
  const form = useLoginForm()

  useEffect(() => {
    form.setValue('id', props.user.id, { shouldValidate: true })
    form.setValue('token', props.token, { shouldValidate: true })
  }, [props.token, props.user.id])

  return (
    <>
      <div className={styles.mainLogin}>
        <div className={styles.rightLogin}>
          <form
            className={styles.cardLogin}
            onSubmit={form.handleSubmit(form.submitForm)}
          >
            <h1 className={styles.h1}>Digite sua nova senha</h1>
            <div className={styles.textfield}>
              <label htmlFor="senha">Nova senha</label>
              <input
                type="password"
                className={`form-control ${
                  !!form.formState.errors.password && 'is-invalid'
                }`}
                placeholder="Nova senha"
                {...form.register('password')}
              />
            </div>
            <div className="text-danger">
              {form.formState.errors.password?.message}
            </div>
            <button
              type="submit"
              className={styles.btnLogin}
              disabled={
                form.formState.isSubmitting || form.formState.isValidating
              }
            >
              Alterar
            </button>
            <div className="text-danger">{form.error}</div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AlterarSenha
