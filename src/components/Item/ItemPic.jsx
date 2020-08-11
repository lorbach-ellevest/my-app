import React from 'react'

const ItemPic = ({ src }) => (
  <div
    style={{
      width: '100%',
      height: '400px',
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover'
    }}
  />
)

export default ItemPic
