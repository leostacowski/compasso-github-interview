import { useEffect } from 'react'
import { APP_NAME } from '~/config'

const Page = ({ children, title }) => {
  useEffect(() => {
    document.title = `${APP_NAME}${title ? ` - ${title}` : ''}`
  })

  return <>{children}</>
}

export default Page
