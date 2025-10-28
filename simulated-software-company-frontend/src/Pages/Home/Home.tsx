
import Header from '../../Shared/components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import LiveOperations from './components/LiveOperations'
import TechStack from './components/TechStack'
import Departments from './components/Departments'
import NewsUpdates from './components/NewsUpdates'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
      <LiveOperations />
      <TechStack />
      <Departments />
      <NewsUpdates />
    </div>
  )
}

export default Home