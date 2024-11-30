import React from 'react'

const ProductHero = () => {
  return (
    <>
    <section className="producthero">
      <div className="container">
         <div className="product__wrap">
            <div className="product__images">
               <img src={product.image} alt="" />
            </div>

            <div className="product__box">
               <h1>{product.name}</h1>
               <h2>⭐⭐⭐⭐</h2>

               <div className="product__price">
                  <p>{product.price} сум</p>
                  <s>{Math.floor(product.price * 1.1)} сум</s>
               </div>
            </div>
         </div>
      </div>
    </section>
    </>
  )
}

export default ProductHero