import React, { Fragment, useContext } from 'react'

import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/ProductCard'
import './shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  )
}

export default Shop
