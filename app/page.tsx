import Banner from '@/components/Banner'
import Creators from '@/components/Creators'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className='w-full min-h-screen'>
     <Banner />
     <Navbar />
     <Hero />
     <Creators />
     <Features />
    </div>
  )
}

export default page
