import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { checkIfIsLoggedIn } from 'shared/helpers/auth'
import PageTemplate from '@templates/PageTemplate'
import HomeTemplate from '@templates/HomeTemplate'
import { User } from '@shared/interfaces'
import AlterarSenha from '@templates/AlterarSenha'
import { Randomize } from 'config'
import { FC } from 'react'

interface homeProps {
  user: User
  token: string
}
const Home: FC<homeProps> = (props: homeProps) => {
  return (
    <PageTemplate user={props.user} token={props.token}>
      {props.user.password === '123' ? (
        <AlterarSenha user={props.user} token={props.token} />
      ) : (
        <HomeTemplate user={props.user} token={props.token} />
      )}
    </PageTemplate>
  )
}

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   try {
//     const loggedIn = await checkIfIsLoggedIn(context)
//     // if (!loggedIn.token) throw new Error('error')

//     return {
//       props: {
//         user: loggedIn.user,
//         token: loggedIn.token
//       }
//     }
//   } catch (error) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }
// }

export default Home

Home.defaultProps = {
  user: {
    id: 1,
    name: '',
    password: '',
    friend: '',
    img: ''
  },
  token: ' '
}
