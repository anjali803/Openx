
import Link from 'next/link';
import About from './components/About';
import Service from './components/Service';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
   <Navbar/>
    <div className='bg-gradient-to-r from-green-500 to-black '>
    
      <div className="relative flex justify-center items-center ">
      {/* Left side: Content */}
      <div className="px-4 py-2 flex-1 flex justify-center items-center vh-100"> {/* Updated class: flex justify-center items-center */}
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center h-full text-white"> {/* Updated class: items-center justify-center */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-center"> {/* Added class: text-center */}
                Navigating the Digital World, Safeguarding Your Business
              </h1>
              <p className="mt-4 text-xl text-center"> {/* Added class: text-center */}
                OpenX is your dedicated ally in the ever-evolving digital landscape.<br/>
                We're committed to elevating your security measures,<br/> 
                offering innovative solutions to safeguard your data and assets.
              </p>
            </div>
            <div className="text-center"> {/* Added class: text-center */}
              <Link href="/Scan" passHref>
                <button className="bg-white text-gray-500 px-6 py-3 rounded-md hover:bg-green-300">
                  Start Scan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="flex-1 vh-100">
        <img
          src="https://security-bbu.netlify.app/images/banner-img.png" // Replace with your image URL
          alt="Hacker"
          className="h-auto max-h-full w-full object-cover"
        />
      </div>
      
    </div>
    <About/>
    <Service/>
    <Faq/>
    <Pricing/>
    <Footer/>
    </div>
    
    
    </>
    
  );
}
