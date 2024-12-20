import React from 'react'
import './Cotegory.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import Btn from '../Btn/Btn'
import './Cotegory.scss'

import Products from '/public/products.json'
import { Link } from 'react-router-dom'

const Cotegory = () => {
  return (
    <>
    <section className="categoty">
        <div className="container">
            
            <div id='arrivals'><SectionTitle position='center' >NEW ARRIVALS</SectionTitle></div>

            <div className="cotegory__wrapper">

            {Products.slice(0, 4).map((card, i) => (
                <Link to={`/product/${card.id}`} key={i} className='category__card'>
                <Card image={card.image} name={card.name} rate='4.5' price={card.price} stars="⭐⭐⭐⭐" /></Link>
              ))}
                
            </div>

            <Btn>View All</Btn>

            <hr style={{margin: '60px 0'}} />

            
            <div id='selling'><SectionTitle position='center' >top selling</SectionTitle></div>

            <div className="cotegory__wrapper">

              {Products.slice(4, 8).map((card, i) => (
                <Link to={`/product/${card.id}`} key={i} className='category__card'>
                <Card image={card.image} name={card.name} rate='4.5' price={card.price} stars="⭐⭐⭐⭐" /></Link>
              ))}
               
            </div>

            <Btn>View All</Btn>
        </div>
    </section>
    </>
  )
}

export default Cotegory