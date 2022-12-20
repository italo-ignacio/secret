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
          <div style={{ textAlign: 'center' }}>
            <h1>Olá {props.user.name}</h1>
            <br />

            <button onClick={() => setShow(!show)}>Ver quem eu tirei</button>
            <br />
            <br />

            {show && (
              <div style={{ alignContent: 'center' }}>
                <h1>{props.user.friend}</h1>
                <br />
                {props.user.img && (
                  <img
                    className={`rounded-circle m-0 p-0 `}
                    src={props.user.img}
                    alt="perfil"
                    width={150}
                    height={150}
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
