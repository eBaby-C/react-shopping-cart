import React from 'react'
import { nanoid } from 'nanoid'
import ShoppingCartFooter from './ShoppingCartFooter'
import ShoppingCartHeader from './ShoppingCartHeader'
import ShoppingCartItem from './ShoppingCartItem'
import shoppingDataList from '../shoppingDataList';
const App = () => {
  
  return (
    <div>
      <ShoppingCartHeader />
      {
        shoppingDataList.map(good => <ShoppingCartItem key={nanoid()} goodInfo={good}  />)
      }
      <ShoppingCartFooter />
    </div>
  )
}

export default App