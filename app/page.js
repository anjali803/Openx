
import About from './components/About';
import Service from './components/Service';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; 
export default function Home() {
  return (
    <>
   <Navbar/>
    <div className='bg-gradient-to-r from-green-500 to-black '>
    
    <div className="min-h-screen flex flex-col lg:flex-row items-center ml-20 animate-fade-up ">
      <div className="w-full lg:w-2/3 lg:pr-8 text-white">
        <div className="text-center lg:text-left">
          <div className="text-5xl font-bold mb-4">
            Navigating the Digital World, Safeguarding Your Business
          </div>
          <div className="text-xl mb-8 lg:w-2/3 lg:pr-8 ">
            Cybersecurity Boost Up is your dedicated ally in the ever-evolving digital landscape. We're committed to elevating your security measures, offering innovative solutions to safeguard your data and assets.
          </div>

          <div className="flex">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded mr-4">
              Scan Website Now
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              ▶
            </button>
          </div>

          {/* Icons */}
    <div className="flex justify-left mt-10 ">
      <FaPhone className="text-white text-xl mr-4 backdrop:line-through" />
      <FaLinkedin className="text-white text-xl mr-4" />
      <FaWhatsapp className="text-white text-xl" />
    </div>

          <div className="mt-8">
            {/* Add your content here */}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mr-20 animate-fade-up ">
        <img src="https://security-bbu.netlify.app/images/banner-img.png" alt="hacker" className="w-full h-full mx-auto lg:mx-0" />
      </div>
    </div>




    <div className=' flex animate-fade-up ' >
      
      
      <div className="grid grid-cols-3 gap-x-4 gap-y-6  m-10  w-4/5">
        <div className=" p-10 w-96 h-auto  ">
          <div className=" w-2/3 bg-black text-orange-400 font-bold p-3  rounded-md">
            <p className='ml-4'>VIRTUAL EVENTS</p>
          
          </div>
          
          <p className="mt-6 text-sm mb-6 text-gray-400">
          Join us for an immersive virtual experience that transcends boundaries. Our virtual events offer a unique platform for networking, learning, and collaborating with industry leaders. Don't miss out on the opportunity to connect with peers, gain insights, and stay ahead of the curve. Mark your calendar for an unforgettable digital journey!
          </p>
          <p className="mt-6 text-sm mb-6 text-gray-400">
          August 11, 2023
          </p>
          
        </div>
        
        
        
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-6  mt-10 m-auto w-4/5">
        <div className=" p-10 w-96 h-auto  ">
          <div className=" w-2/3 bg-black text-orange-400 font-bold p-3  rounded-md">
            <p className='ml-4'>VIRTUAL EVENTS</p>
          
          </div>
          
          <p className="mt-6 text-sm mb-6 text-gray-400">
          Join us for an immersive virtual experience that transcends boundaries. Our virtual events offer a unique platform for networking, learning, and collaborating with industry leaders. Don't miss out on the opportunity to connect with peers, gain insights, and stay ahead of the curve. Mark your calendar for an unforgettable digital journey!
          </p>
          <p className="mt-6 text-sm mb-6 text-gray-400">
          August 11, 2023
          </p>
          
        </div>
        
        
        
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-6  mt-10 m-auto w-4/5">
        <div className=" p-10 w-96 h-auto  ">
          <div className=" w-2/3 bg-black text-orange-400 font-bold p-3  rounded-md">
            <p className='ml-4'>VIRTUAL EVENTS</p>
          
          </div>
          
          <p className="mt-6 text-sm mb-6 text-gray-400">
          Join us for an immersive virtual experience that transcends boundaries. Our virtual events offer a unique platform for networking, learning, and collaborating with industry leaders. Don't miss out on the opportunity to connect with peers, gain insights, and stay ahead of the curve. Mark your calendar for an unforgettable digital journey!
          </p>
          <p className="mt-6 text-sm mb-6 text-gray-400">
          August 11, 2023
          </p>
          
        </div>
        
        
        
      </div>
    </div>

    <hr/>
    <h3 className='text-center text-white font-bold text-2xl'>Trusted Over 100+ Companies in the World</h3>
    <div className='flex align-center justify-around mt-10 mb-20'>
      <img className='w-28' src='https://security-bbu.netlify.app/images/companies-icon1.png' alt=''></img>
      <img className='w-10 h-10 mt-10'  src='https://security-bbu.netlify.app/images/companies-icon2.png' alt=''></img>
      <img className='w-10 h-10 mt-10'  src='https://security-bbu.netlify.app/images/companies-icon3.png' alt=''></img>
      <img className='w-10 h-10 mt-10'  src='https://security-bbu.netlify.app/images/companies-icon4.png' alt=''></img>
      <img className='w-10 h-10 mt-10'  src='https://security-bbu.netlify.app/images/fans-army.webp' alt=''></img>
      <img className='w-10 h-10 mt-10'  src='https://security-bbu.netlify.app/images/aiims-6.jpg' alt=''></img>
    </div>
    


    
    <About/>

    <div className='m-60'><img src='https://security-bbu.netlify.app/images/cyber-security-left-img.png' alt=''></img></div>

    <div className='flex mt-10 ml-40 align-center mb-10'>
    

      <div className="grid grid-cols-4  m-auto w-3/12 ">
        <div className=" p-5 w-60 h-auto bg-slate-950 rounded-lg ">
          <div className=" w-20 bg-gray-300 p-2 rounded-md">
            <img
              className="m-2"
              src="https://security-bbu.netlify.app/images/about-section2-icon1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-bold text-4xl text-gray-400">
            70+
          </h2>
          <p className=" font-bold text-lg text-gray-400">Global Projects</p>
          
        </div>
        
        
        
      </div>
      <div className="grid grid-cols-4  m-auto w-3/12 ">
        <div className=" p-5 w-60 h-auto bg-slate-950 rounded-lg ">
          <div className=" w-20 bg-gray-300 p-2 rounded-md">
            <img
              className="m-2"
              src="https://security-bbu.netlify.app/images/about-section2-icon1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-bold text-4xl text-gray-400">
            70+
          </h2>
          <p className=" font-bold text-lg text-gray-400">Global Projects</p>
          
        </div>
        
        
        
      </div>
      <div className="grid grid-cols-4  m-auto w-3/12 ">
        <div className=" p-5 w-60 h-auto bg-slate-950 rounded-lg ">
          <div className=" w-20 bg-gray-300 p-2 rounded-md">
            <img
              className="m-2"
              src="https://security-bbu.netlify.app/images/about-section2-icon1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-bold text-4xl text-gray-400">
            70+
          </h2>
          <p className=" font-bold text-lg text-gray-400">Global Projects</p>
          
        </div>
        
        
        
      </div>
      <div className="grid grid-cols-4  m-auto w-3/12  ">
        <div className=" p-5 w-60 h-auto bg-slate-950 rounded-lg ">
          <div className=" w-20 bg-gray-300 p-2 rounded-md">
            <img
              className="m-2"
              src="https://security-bbu.netlify.app/images/about-section2-icon1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-bold text-4xl text-gray-400">
            70+
          </h2>
          <p className=" font-bold text-lg text-gray-400">Global Projects</p>
          
        </div>
        
        
        
      </div>
    </div>

    <div className='animate-fade-up '>
    <div className="min-h-screen flex flex-col lg:flex-row items-center ml-64 ">
      <div className="w-full lg:w-2/3 lg:pr-8 text-white">
        <div className="text-center lg:text-left">
          <div className="text-2xl font-bold mb-4">
          Providing Best <span className='text-black'>Cyber Security</span>  Solutions
          </div>
          <div className="text-xl mb-8  ">
          <p className='text-base'>Your Trusted Partner for the Best Cybersecurity Solutions: We are committed to delivering top-tier cybersecurity solutions that fortify your digital defenses.</p>
          <p className='mt-10 text-base'>With a focus on innovation, expertise, and tailored strategies, we ensure your business remains resilient against evolving threats. Choose us for the best in cybersecurity protection.</p>
          
          </div>
          <div className="mr-80">
        <button className="bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-6  rounded">
          Contact Us
        </button>
      </div>

          

       

          
        </div>
      </div>
      <div className="w-full lg:w-1/2 mr-20 animate-fade-up ">
        <img src="https://security-bbu.netlify.app/images/cyber-security-right-img.png" alt="hacker" className="w-full h-full mx-auto lg:mx-0" />
      </div>
    </div>
    </div>
    

    <Service/>
    <Faq/>
    <Pricing/>
    <div className='mt-40'>
      <h1 className="text-3xl text-center font-bold font-sans">
        Latest News & Blog
      </h1>
      <p className="text-md text-center m-auto w-5/12 mt-4 ">
      Stay Informed with Our Latest News & Blog Updates
      </p>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6  mt-10 m-auto  w-4/5 ">
        <div className=" p-10 w-90 h-6/7  bg-slate-900 rounded-lg ">
          <div className=" ml-1  w-100 rounded-md">
            <img
              
              src="https://security-bbu.netlify.app/images/blog-section-img1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400 text-center">Protect Your Workplace From Cyber Attacks</h2>
          
          <p className="mt-6  text-center text-md mb-6 text-gray-400 ">
          Cyber Attacks
          </p>
          
        </div>

        <div className=" p-10 w-90 h-6/7  bg-slate-900 rounded-lg ">
          <div className=" ml-1  w-100 rounded-md">
            <img
              
              src="https://security-bbu.netlify.app/images/blog-section-img1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400 text-center">Protect Your Workplace From Cyber Attacks</h2>
          
          <p className="mt-6  text-center text-md mb-6 text-gray-400 ">
          Cyber Attacks
          </p>
          
        </div>

        <div className=" p-10 w-90 h-6/7  bg-slate-900 rounded-lg ">
          <div className=" ml-1  w-100 rounded-md">
            <img
              
              src="https://security-bbu.netlify.app/images/blog-section-img1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400 text-center">Protect Your Workplace From Cyber Attacks</h2>
          
          <p className="mt-6  text-center text-md mb-6 text-gray-400 ">
          Cyber Attacks
          </p>
          
        </div>
      </div>
    </div>

    <div className=' p-20 bg-green-900  w-4/5 m-auto mt-20 '>
      
      <h2 className='text-center text-white font-bold text-4xl'>Subscribe Our Newsletter</h2>
      <p className='text-center mt-6'>Get latest security news and offers!</p>
      <form className='ml-96 mt-10 '>
        <input className='p-2 rounded-md' type='text' placeholder='Enter your email address'></input>
        <button className='bg-green-300 p-2 rounded-md font-bold'>Subscribe</button>
      </form>
    
      
    </div>
    <Footer/>
    </div>
    
    
    </>
    
  );
}
