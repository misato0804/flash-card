'use client'
import RegularButton from "@/components/button/regularButton"
import { useRouter } from 'next/navigation'
import './style.css'

const Hero = () => {

  const route = useRouter()

  const handleOnClick = () => {
    route.push('/register')
  }

  return (
    <>
      <div className="heading-container">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-48">Let&apos;s study in your spare time</h1>
      </div>
      <p className="text-center my-20">Snap Study helps you turbocharge your learning process with customizable flashcards that make studying both effective and engaging. Whether you&apos;sre prepping for exams or learning new skills, our intuitive platform adapts to your pace and style. Dive into a seamless study experience where progress is just a card flip away. Get ready to achieve your learning goals faster and with more fun than ever before. </p>
      <div className="lg:w-1/3 flex m-[auto] mb-14">
        <RegularButton
          color={"secondary"}
          onClick={handleOnClick}
          text="create your account"
          size="md"
          type="button"
        />
      </div>
    </>
  )
}

export default Hero