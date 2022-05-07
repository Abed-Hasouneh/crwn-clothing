import React from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview';

import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import './categories-preview.styles.scss'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
