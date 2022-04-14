import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import HomeBanner1 from '../../assets/images/home-banner-1.png'
import HomeBanner2 from '../../assets/images/home-banner-2.png'
import Layout from '../../components/Layout'
import Products from '../../data/products.json'
import ProductCard from '../../components/ProductCard'
import { post } from '../api/clientRequest'

const Home: NextPage<any> = ({ data }) => {
  const [categories, setCategories] = useState([])
  const basePath = '/assets/images/categories/'
  const [selectedCategories, setSelectedCategories] = useState<any>([])
  const [products, setProducts] = useState<any>(Products)

  useEffect(() => {
    getCategory()
  }, [])

  const getCategory = async () => {
    const { data } = await post('category', null)
    if (data.length) setCategories(data)
  }

  const handleCategoryClick = (category: any) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c: any) => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(newSelectedCategories)
  }

  return (
    <Layout>
      {/* Home Banner */}
      <div className="flex flex-wrap items-center justify-between">
        <div className="home-banner mb-3 h-[200px] md:h-[200px]">
          <Image src={HomeBanner1} />
        </div>
        <div className="home-banner h-[200px] md:h-[200px]">
          <Image src={HomeBanner2} />
        </div>
      </div>

      {/* Home Categories */}
      <div className="mt-10 flex flex-wrap items-center justify-center md:justify-between">
        {categories.map((category: any) => {
          return (
            <div
              onClick={() => handleCategoryClick(category.name)}
              className={`mr-2 mb-2 h-[70px] w-[70px] cursor-pointer rounded-xl border py-4 text-center hover:border-primary hover:bg-primary-light md:h-[80px] md:w-[150px] ${
                selectedCategories.includes(category.name)
                  ? ' border-2 border-primary bg-primary-light'
                  : ''
              }`}
            >
              <div>
                <Image
                  src={`/categories/${category.name}.png`}
                  width={20}
                  height={20}
                />
              </div>
              <h1 className="mb-0">{category.name}</h1>
            </div>
          )
        })}
      </div>

      {/* Home Products */}
      <div className="mt-10">
        <h1 className="mb-4 text-xl">Nearyby Restuarants</h1>
        <div className="flex flex-wrap">
          {products.map((product: any) => {
            return <ProductCard {...product} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Home
