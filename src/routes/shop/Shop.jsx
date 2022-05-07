import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'

import CategoriesPreview from '../categories-preivew/CategoriesPreview'
import Category from '../category/Category'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';

import './shop.styles.scss'

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
