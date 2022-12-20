import { User } from '@shared/interfaces'

interface PageTemplateProps {
  children: React.ReactNode
  user: User
  token: string
}

const PageTemplate = (props: PageTemplateProps) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  )
}

export default PageTemplate
