import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

export default class Cookies {
  static get(name: string, ctx?: GetServerSidePropsContext) {
    const cookies = parseCookies(ctx)

    return cookies[name] || undefined
  }
}
