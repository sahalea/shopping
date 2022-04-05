import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import type { NextPage } from 'next'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import Avatar from '../assets/images/avatar.png'

const Navbar: NextPage = () => {
  return (
    <div className=" border-b">
      <div className="container m-auto flex h-[80px] w-full items-center justify-start px-3 md:px-0">
        <div className="app-brand flex flex-1 md:flex-initial">
          <Image src={Logo} />
        </div>
        <div className="app-search relative ml-10  hidden items-center md:flex">
          <Input placeholder="Search" className="search-box" />
          <SearchOutlined className="absolute right-[10px]" />
        </div>
        <div className="hidden flex-1 items-center justify-end md:flex">
          <div className="mr-6">
            <a
              href=""
              className="font-semibold text-gray-800 hover:text-primary"
            >
              Restaurants
            </a>
          </div>
          <div className="mr-6">
            <a
              href=""
              className="font-semibold text-gray-800 hover:text-primary"
            >
              Deals
            </a>
          </div>
          <div className="mr-6">
            <a
              href=""
              className="font-semibold text-gray-800 hover:text-primary"
            >
              My Orders
            </a>
          </div>
        </div>
        <div className="relative mr-6 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl border-primary-light bg-primary-light">
          <ShoppingCartOutlined
            className=" text-xl font-semibold text-primary"
            style={{ color: '#4E60FF' }}
          />
          <span className="absolute top-[-5px] right-[-8px] w-[20px] rounded-md bg-primary text-center text-sm text-white">
            4
          </span>
        </div>
        <Image src={Avatar} width="50" height="50" className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar
