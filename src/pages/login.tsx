import AuthService from '@services/user'
import LoginTemplate from '@templates/LoginTemplate'
import { Pessoas } from 'config'

const Login = () => {
  return (
    <>
      <LoginTemplate />
      <button
        onClick={() => {
          Pessoas.map(pe => {
            setTimeout(() => {
              AuthService.cadastrar(pe.name, pe.password, pe.friend, '')
            }, 1000)
          })
        }}
      >
        add
      </button>
    </>
  )
}

export default Login
