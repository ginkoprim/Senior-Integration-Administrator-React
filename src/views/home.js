import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Integration Administrator</title>
        <meta property="og:title" content="Senior Integration Administrator" />
      </Helmet>
    </div>
  )
}

export default Home
