import AuthService from '@services/user'
import { User } from '@shared/interfaces'
import { Pessoas, Randomize } from 'config'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './styles.module.css'

interface HomeTemplateProps {
  user: User
  token: string
}
const HomeTemplate = (props: HomeTemplateProps) => {
  const [show, setShow] = useState(false)
  const [showw, setShoww] = useState(true)
  const router = useRouter()
  const sort = () => {
    setShoww(false)
    try {
      const lista = Randomize()
      let to: Array<{ id: number; friend: string; img: string }> = []
      Pessoas.map((pe, index) => {
        to.push({
          id: pe.id,
          friend: lista[index],
          img: `/images/${lista[index]
            .replace('Vc tirou a ', '')
            .replace('Vc tirou o ', '')
            .toLocaleLowerCase()}.jpg`
        })
        if (lista[index].includes(pe.name)) throw new Error()
      })
      to.map(pe => {
        setTimeout(() => {
          AuthService.atualizar(pe.id, pe.friend, pe.img, props.token)
        }, 1000)
      })
    } catch (error) {
      sort()
    }
  }

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
                    alt=""
                    width={150}
                    height={150}
                  />
                )}
              </div>
            )}

            {props.user.name === 'Italo' &&
              props.user.friend === 'Espere o sorteio' && (
                <>
                  {/* <button
                    onClick={() => {
                      Pessoas.map(pe => {
                        setTimeout(() => {
                          AuthService.cadastrar(
                            pe.id,
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
                  </button> */}
                  <br />
                  <br />
                  <button
                    onClick={sort}
                    style={{ display: !showw ? 'none' : 'initial' }}
                  >
                    sortear
                  </button>
                </>
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTemplate
