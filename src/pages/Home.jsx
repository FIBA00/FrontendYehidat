import Hero       from '../components/sections/Hero'
import Occasions  from '../components/sections/Occasions'
import HowItWorks from '../components/sections/HowItWorks'
import Packages   from '../components/sections/Packages'
import Gallery    from '../components/sections/Gallery'
import Contact    from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Occasions />
      <HowItWorks />
      <Packages />
      <Gallery />
      <Contact />
    </>
  )
}
