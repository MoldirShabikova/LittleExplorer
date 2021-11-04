import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
export default function Crafts(props) {
  const { crafts } = props

  return (
    <div>
      <h3>Crafts for Kids</h3>
      {crafts.map((craft) => (
        <div>
          <Link to='/craftsDetails'>
            {' '}
            <p>{craft.title}</p>{' '}
          </Link>
          <p>by: {craft.name}</p>
          <img src={craft.image} />
        </div>
      ))}
    </div>
  )
}
