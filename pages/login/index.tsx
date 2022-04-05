import type { NextPage } from 'next'
import LoginBanner from './components/LoginBanner'
import LoginForm from './components/LoginForm'

const Login: NextPage = () => {
  return (
    <div className="flex h-full">
      <div className="w-full md:w-1/2">
        <LoginForm />
      </div>
      <div className="hidden md:block md:w-1/2">
        <LoginBanner />
      </div>
    </div>
  )
}

export default Login
