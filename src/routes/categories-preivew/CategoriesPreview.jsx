import React, { Fragment, useContext } from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview';

import { CategoriesContext } from '../../context/categories.context'

import './categories-preview.styles.scss'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  )
}

export default CategoriesPreview
