import { ClockCircleOutlined } from '@ant-design/icons'
import type { NextPage } from 'next'
import Image from 'next/image'
import DummayBanner from '../../../assets/images/img mask.png'
import Pizza from '../../../assets/images/categories/pizza.png'

const ProductCard: NextPage = (props: any) => {
  return (
    <div className="relative mb-3 h-[276px] w-full cursor-pointer  rounded-[17px] border md:mr-3 md:w-[32%]">
      <div className="absolute top-0 right-0 z-[1001]  rounded-tr-[17px] rounded-bl-[17px] bg-primary p-2 px-4 text-white">
        FEATURED
      </div>

      <div className="product-banner">
        <Image className="w-full" src={DummayBanner} height={160}></Image>
      </div>

      <div className="px-6">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="mb-0 text-lg font-semibold">{props.title}</h1>
            <div className="mb-5 flex items-center">
              <div className="flex items-center text-gray-500">
                <ClockCircleOutlined />
                <p className="mb-0 ml-1">{props.time}</p>
              </div>
              <p className="mx-2 mb-0 font-bold">.</p>
              <p className="mb-0 text-gray-500">
                {props.priceType} {props.price} min sum
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {props.categories.map((category: any) => {
            return (
              <div className="mr-2 mb-2 flex items-center rounded-full bg-gray-200 px-4 py-1">
                <Image src={Pizza} width={20} height={20} />
                <span className="ml-2">{category.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
