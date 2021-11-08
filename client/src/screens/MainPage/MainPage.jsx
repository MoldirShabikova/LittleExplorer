import React from 'react'

import './MainPage.css'

export default function MainPage() {
  return (
    <div className='wall-main-container'>
      <div className='wall-main-left'>
        <h1>Welcome to Little Explorer. </h1>
        <p>
          Digital toolbox. It helps people to get up-to-date information on
          various topics.
          <br />
          Let's build great community and help each other find awesome for
          families.
        </p>
        <img src='https://img.icons8.com/fluent/48/000000/like.png' />
      </div>
      <div className='wall-main-right'>
        <img src='https://annelimky.files.wordpress.com/2014/08/children-globe-top.jpg?w=500' />
      </div>
    </div>
  )
}
