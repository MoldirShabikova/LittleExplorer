import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
export default function Crafts(props) {
  const { crafts } = props

  return (
    <div>
      <h3>Crafts for Kids</h3>
      {crafts.map((craft) => (
        <p>{craft.title}</p>
      ))}
    </div>
  )
}
