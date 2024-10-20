import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Featured from '../Featured/Featured'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <h1>Home</h1>
      <Category></Category>
      <Featured></Featured>
    </div>
  )
}
