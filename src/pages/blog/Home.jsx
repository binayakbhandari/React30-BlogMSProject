import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'

const Home = () => {
  return (
    <Layout>
      <div className='flex justify-center space-x-4 mt-5'>
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  )
}

export default Home