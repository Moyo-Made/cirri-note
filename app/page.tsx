import Banner from '@/components/Banner'
import Creators from '@/components/Creators'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
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
     <Footer />
    </div>
  )
}

export default page
