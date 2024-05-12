'use client'
import RegularButton from '@/components/button/regularButton'
import React from 'react'
import { useRouter } from 'next/navigation'

const LoginSignupCTA = () => {

  const route = useRouter()

  const handleOnClick = () => {
    route.push('/register')
  }
  return (
    <div className='flex justify-center my-12'>
      <div>
        <p className='mb-4'>Do you already have an account?</p>
        <RegularButton 
          text={'Go to Login page'}    
          color='secondary' 
          onClick={handleOnClick}   
        />
      </div>
    </div>
  )
}

export default LoginSignupCTA