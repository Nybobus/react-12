import React from 'react'
import { useParams } from 'react-router-dom'

import Products from '/public/products.json'
import ProductHero from '../components/ProductHero/ProductHero'

const SinglePage = () => {

   const { id } = useParams()

   const product = Products.find(item => item.id === Number(id))
  return (
    <>

    <ProductHero />
    </>
  )
}

export default SinglePage