import img from './img.jpg'

const Aboutpage = () => {

  return (
    <div className="bg-black text-white py-20 "id='about'>
      <div className="container mx-auto px-8 md:px-16 ">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 ">
            <img src={img} alt="bb"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
            <div className='flex-1'> 
            <p className='text-2xl mb-8'> 
                I am a passionate frontend developer with a focus on building 
                 modern and responsive web applications, with a strong foundation in both frontend and backend technologies,
                 I strive to create seemless and efficient user experiences.</p>
<div className='space-y-4'>
    <h2 className='text-2xl font-bold'>Skills</h2>
<div className='flex items-center'>
    <label htmlFor="htmlandcss"className='w-2/12'>HTML & CSS</label>
    <div className='grow bg-gray-800 rounded-full h-2.5'>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
        tranform transition-transform duration-300 hover:scale-105 w-10/12'>
        </div>
    </div>
</div>
<div className='flex items-center'>
    <label htmlFor="htmlandcss"className='w-2/12'>React JS</label>
    <div className='grow bg-gray-800 rounded-full h-2.5'>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
        tranform transition-transform duration-300 hover:scale-105 w-11/12'>

        </div>
    </div>
</div>
<div className='flex items-center'>
    <label htmlFor="htmlandcss"className='w-2/12'>FIGMA</label>
    <div className='grow bg-gray-800 rounded-full h-2.5'>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
        tranform transition-transform duration-300 hover:scale-105 w-11/12'>

        </div>
    </div>
</div>
<div className='flex items-center'>
    <label htmlFor="htmlandcss"className='w-2/12'>JAVASCRIPT</label>
    <div className='grow bg-gray-800 rounded-full h-2.5'>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
        tranform transition-transform duration-300 hover:scale-105 w-9/12'>

        </div>
    </div>
</div>
<div className='flex items-center'>
    <label htmlFor="htmlandcss"className='w-2/12'>NODE JS</label>
    <div className='grow bg-gray-800 rounded-full h-2.5'>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
        tranform transition-transform duration-300 hover:scale-105 w-8/12'>

        </div>
    </div>
</div>
<div className='flex items-center'>
    <label htmlFor="htmlandcss"className='w-2/12'>EXPRESS</label>
    <div className='grow bg-gray-800 rounded-full h-2.5'>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
        tranform transition-transform duration-300 hover:scale-105 w-8/12'>

        </div>
    </div>
</div>


<div className='mt-12 flex justify-between text-center'>
<div>
    <h3 className='text-2xl font-bold text-transparent bg-clip-text 
      bg-gradient-to-r from-green-400 to-blue-600'>
        6
    </h3>
    <p>Months of Experience</p>

</div>
<div>
    <h3 className='text-2xl font-bold text-transparent bg-clip-text 
      bg-gradient-to-r from-green-400 to-blue-600'>
        5+
    </h3>
    <p>Projects Completed</p>

</div>
<div>
    <h3 className='text-2xl font-bold text-transparent bg-clip-text 
      bg-gradient-to-r from-green-400 to-blue-500'>
        0
    </h3>
    <p>Happy Client</p>

</div>
</div>







</div>



        </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
