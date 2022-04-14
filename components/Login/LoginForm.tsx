import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Logo from './../../assets/images/logo.png'
import Image from 'next/image'
import { Checkbox, Input, message } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { post } from '../../pages/api/clientRequest'

const LoginForm: NextPage = () => {
  const [user, setUser] = useState({})
  const router = useRouter()

  const loginUser = async () => {
    const data = await post('login', user)
    if (data.status) {
      router.push('/home')
    } else message.error('Login Failed')
  }

  return (
    <div className="m-auto flex h-full max-w-[90%] flex-col items-start justify-between  py-6 sm:px-3 md:max-w-[400px]">
      <div className="login-logo">
        <Image src={Logo} alt="Logo" />
      </div>

      <div className="login-form">
        <h1 className="mb-6 text-5xl font-semibold">Login</h1>
        <p className="text-sm text-gray-700">
          Sign in with your data that you entered during your registration.
        </p>

        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            type="text"
            className="input"
            placeholder="name@example.com"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>

        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input.Password
            className="flex items-center"
            placeholder="min. 8 characters"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <div className="form-control !my-5">
          <Checkbox>Keep me logged in</Checkbox>
        </div>

        <button className="button button-primary" onClick={() => loginUser()}>
          Login
        </button>

        <div className="my-6 w-full text-center">
          <a href="#" className="font-semibold text-primary">
            Forgot Password
          </a>
        </div>
      </div>

      <div className="login-footer flex w-full items-center justify-center">
        <span>Don't have an account?</span>
        <a href="" className="ml-1 font-semibold text-primary">
          Sign up
        </a>
      </div>
    </div>
  )
}

export default LoginForm
