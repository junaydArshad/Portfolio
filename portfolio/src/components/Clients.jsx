import React from 'react'

const Clients = React.forwardRef ((props, ref ) =>
    <div ref={ref} className='flex justify-center items-center bg-black text-white h-screen w-full '>
           <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='text-5xl -mt-60'>
                What my Clients say about me.
            </h1>
            <div className='flex flex-row items-center justify-center'>
            <span className="absolute left-0 w-96 h-96 bg-red-500 rounded-full  blur-300"></span>
            <div className='mt-10 py-4 bg-black flex flex-col items-center justify-center w-1/2 rounded-2xl'>
                <h1 className=' text-xl text-white text-center'>"Fantastic seller that delivered promptly and managed to work with a difficult asset"</h1>
                <h1 className=' text-xl text-red-400'>stenqvist</h1>
            </div>
            <div className='mt-10 py-4 bg-black flex flex-col items-center justify-center w-1/2 rounded-2xl'>
                <h1 className=' text-xl text-white text-center -mt-6'>"Good with communication and hard working."</h1>
                <h1 className=' text-xl text-red-400'>WeMoDe_tech</h1>
                <span className="absolute right-1 w-96 h-96 bg-teal-400 rounded-full  blur-300"></span>
            </div>
            </div>
            
           </div>
           
    </div>
)

export default Clients