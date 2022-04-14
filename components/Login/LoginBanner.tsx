import { Carousel } from 'antd'
import Image from 'next/image'
import type { NextPage } from 'next'
import Reviews from './../../assets/images/reviews.png'
import Squared from './../../assets/images/squared.png'
import Horizontal from './../../assets/images/horizontal.png'

const LoginBanner: NextPage = () => {
  return (
    <div className="h-full w-full bg-primary">
      <div className="login-banner-collages relative h-4/5 pt-[80px]">
        <div className="flex items-end">
          <Image src={Reviews} />
          <Image src={Squared} />
        </div>
        <div className="relative bottom-[240px]">
          <Image src={Horizontal} />
        </div>
      </div>
      <div className="login-banner-slider m-auto max-w-[60%] text-center">
        <Carousel>
          <div>
            <h1 className="text-3xl font-semibold text-white">
              Leave reviews for all meals
            </h1>
            <p className="mb-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus veritatis itaque tempore, minima asperiores explicabo
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-white">
              Leave reviews for all meals
            </h1>
            <p className="mb-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus veritatis itaque tempore, minima asperiores explicabo
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-white">
              Leave reviews for all meals
            </h1>
            <p className="mb-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus veritatis itaque tempore, minima asperiores explicabo
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default LoginBanner
