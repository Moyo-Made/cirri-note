import Banner from '@/components/Banner'
import Creators from '@/components/Creators'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className='bg-black'>
     <Banner />
     <Navbar />
     <Hero />
     <Creators />
    </div>
  )
}

export default page
