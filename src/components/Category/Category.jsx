import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import Btn from '../Btn/Btn'


const Category = () => {
  return (
    <>
    <section className="category">
      <div className="container">

         <div className="category__wrapper">
            <Card image={'/card-1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4.5' price='140' stars="⭐⭐⭐⭐" />
            <Card image={'/card-2.png'} name='T-SHIRT WITH TAPE DETAILS DANIYAR LEGENDA ' rate='3.5' price='140' stars="⭐⭐⭐⭐" />
            <Card image={'/card-3.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4.5' price='140' stars="⭐⭐⭐⭐" />
            <Card image={'/card-4.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4.5' price='140' stars="⭐⭐⭐⭐" />
            
         </div>

         <Btn>View All</Btn>

         <hr style={{margin: '60px 0'}}/>

         <SectionTitle position='right'>NEW ARRIVALS</SectionTitle>

         <Card image={'/card-1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4.5' price='140' stars="⭐⭐⭐⭐" />
            <Card image={'/card-2.png'} name='T-SHIRT WITH TAPE DETAILS DANIYAR LEGENDA ' rate='3.5' price='140' stars="⭐⭐⭐⭐" />
            <Card image={'/card-3.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4.5' price='140' stars="⭐⭐⭐⭐" />
            <Card image={'/card-4.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4.5' price='140' stars="⭐⭐⭐⭐" />
            
      </div>
    </section>
    </>
  )
}

export default Category