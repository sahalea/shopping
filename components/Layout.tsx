import type { NextPage } from 'next'
import Navbar from './Navbar'

const Layout: NextPage = (props: any) => {
  return (
    <div className="px flex flex-col">
      <Navbar />
      <div className="container m-auto mt-5 px-3 md:px-0">{props.children}</div>
    </div>
  )
}

export default Layout
