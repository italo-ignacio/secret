import AuthService from '@services/user'
import { User } from '@shared/interfaces'
import { Pessoas } from 'config'
import { useState } from 'react'
import styles from './styles.module.css'

interface HomeTemplateProps {
  user: User
}
const HomeTemplate = (props: HomeTemplateProps) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={styles.div}>
        <div className="m-5">
          <h1>Bem vindo {props.user.name}</h1>
          <br />
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setShow(!show)}>Ver quem eu tirei</button>
            <br />
            <br />

            {show && (
              <div style={{ alignContent: 'center' }}>
                <h1>{props.user.friend}</h1>
                {props.user.img && (
                  <img
                    className={`rounded-circle m-0 p-0 `}
                    src={props.user.img}
                    alt="perfil"
                    width={100}
                    height={100}
                  />
                )}
              </div>
            )}

            {props.user.name === 'Italo' && (
              <>
                <button
                  onClick={() => {
                    Pessoas.map(pe => {
                      setTimeout(() => {
                        AuthService.cadastrar(
                          pe.name,
                          pe.password,
                          pe.friend,
                          ''
                        )
                      }, 1000)
                    })
                  }}
                >
                  add
                </button>
                <br />
                <br />
                <button onClick={() => {}}>sortear</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTemplate
