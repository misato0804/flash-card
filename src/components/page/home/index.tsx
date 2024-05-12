import React from 'react'
import Hero from './components/Hero'
import FeatureOverview from './components/featureOverview'
import LoginSignupCTA from './components/loginSignupCTA'

const HomePageComponent = () => {
  return (
    <div className="background flex justify-center">
      <div className="w-2/3">
        <Hero />
        <FeatureOverview />
        <LoginSignupCTA/>
      </div>
    </div>
  )
}

export default HomePageComponent