'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureOverview = () => {

  const featureRef1 = useRef(null);
  const featureRef2 = useRef(null);
  const featureRef3 = useRef(null);

  useEffect(() => {
    const features = [featureRef1.current, featureRef2.current, featureRef3.current];

    features.forEach((feature, index) => {
      gsap.fromTo(feature, 
        {
          autoAlpha: 0, 
          y: 50
        }, 
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: feature,
            start: 'top 80%', 
            toggleActions: 'play none none reverse',
          }
        })
    })
  }, [])

  return (
    <div className='feature-overview flex my-24 justify-center'>
      <div className='grid grid-rows-4 gap-12'>
        <h2 className='text-3xl lg:text-4xl font-bold text-center mt-32'>
          Explore the Features of Snap Study
        </h2>
        <div className='feature-top md:grid md:grid-cols-2' ref={featureRef1}>
          <div className='md:text-end text-center'>
            <h3 className='text-xl lg:text-2xl font-bold'>Mobile Optimization</h3>
            <p className='mb-8 md:my-4'>Study on the go with an app fully optimized for your smartphone.</p>
          </div>
          <div className='w-[100px] h-[100px] bg-white mx-[auto] rounded-[50%]' />
        </div>
        <div className='feature-top flex flex-row-reverse' ref={featureRef2}>
          <div className='md:text-start text-center w-1/2'>
            <h3 className='text-xl lg:text-2xl font-bold'>Mobile Optimization</h3>
            <p className='mb-8 md:my-4'>Study on the go with an app fully optimized for your smartphone.</p>
          </div>
          <div className='w-[100px] h-[100px] bg-white mx-[auto] rounded-[50%]' />
        </div>
        <div className='feature-top md:grid md:grid-cols-2' ref={featureRef3}>
          <div className='md:text-end text-center'>
            <h3 className='text-xl lg:text-2xl font-bold'>Mobile Optimization</h3>
            <p className='mb-8 md:my-4'>Study on the go with an app fully optimized for your smartphone.</p>
          </div>
          <div className='w-[100px] h-[100px] bg-white mx-[auto] rounded-[50%]' />
        </div>
      </div>
    </div>
  )
}

export default FeatureOverview