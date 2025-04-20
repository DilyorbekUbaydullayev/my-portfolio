import About from "@/components/about"
import Hero from "@/components/shared/hero"
import Navbar from "@/components/shared/navbar"

function HomePage() {
  return (
    <div className=" min-h-screen bg-black text-white ">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default HomePage