import React, { useState } from 'react'

const ShoppingCartItem = (props) => { 
  const {goodsName, goodsNum, goodsImg, goodsPrice} = props.goodInfo
  return ( 
    <>
      <div>
        <input type="checkbox" className='goodChecked' />
      </div>
      <div>
        <img src={goodsImg} alt="" />
      </div>
      <div>
        <span>{goodsName}</span>
      </div>
      <div className='changeNum'>
        <span className='decrease'>➖</span>
        <span className='goodsNum'>{goodsNum}</span>
        <span className='increase'>➕</span>
      </div>
      <div className='price'>{goodsPrice}</div>
      <div className='total'>{goodsNum * goodsPrice}</div>
      <div>
        <span className='delete'>删除</span>
      </div>
    </>
  )
}

export default ShoppingCartItem