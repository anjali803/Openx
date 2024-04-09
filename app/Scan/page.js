

const CyberSecurityPage = () => {
  return (
    <>
    {/* Navbar */}
    <nav className="bg-gradient-to-r from-green-500 to-black p-4 flex justify-between items-center">
      {/* Left Side Logo */}
      <div className="flex items-center">
        <span className="text-white text-5xl font-bold ml-20 ">OpenX</span>
      </div>

      {/* Centered Links */}
      <div className="flex justify-center">
        <a href="/" className="text-white mx-4 hover:text-gray-300">
          Home
        </a>
        <a href="/Scan" className="text-white mx-4 hover:text-gray-300">
          Scan
        </a>
        <a href="/#about" className="text-white mx-4 hover:text-gray-300">
          About
        </a>
        <a href="/#service" className="text-white mx-4 hover:text-gray-300">
          Service
        </a>
        <a href="/#pricing" className="text-white mx-4 hover:text-gray-300">
          Pricing
        </a>
        <a href="/#faq" className="text-white mx-4 hover:text-gray-300">
          FAQ
        </a>
      </div>

      {/* Right Side Button */}
      <div className="mr-80">
        <button className="bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-6  rounded">
          Contact Us
        </button>
      </div>
    </nav>
    
    <div className="flex  justify-center items-center bg-gradient-to-r from-green-500 to-black min-h-screen  " >

<div className="container ml-40 mb-40 px-4 py-8 animate-fade-up ">
  <h1 className="text-4xl text-white font-bold mb-4">Cyber Security Solutions for Organizations  <br/> with Critical Infrastructure</h1>
  <div className='flex'> <p className="text-lg text-white mb-8">The scanner Scope is too small. Don't use it for professional audits.</p>
  {/* <button className="bg-gray-600 text-white  rounded-md ml-2 p-1 w-16 h-8">BETA</button> */}
  <a className="position-absolute top-1 end-0 bg-gray-600 text-light p-2 rounded small h-9" style={{ boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)', textDecoration: 'none', marginLeft: '10px' }}>
                    BETA
                  </a> 
</div>
 
  <form className="mb-8 ">


 
    <div className="flex items-center mb-4">
      <input type="text" placeholder="Enter URL" className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-solid-gray-2px" />
      <button className="bg-transparent border border-gray-400 px-2 py-2 rounded-r-md text-gray-800  hover:bg-green-400">Scan</button>
    </div>

    
  </form>

  
</div>
</div>

 

    </>
    
  );
};

export default CyberSecurityPage;