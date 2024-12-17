import React from 'react'

function Footer() {
  return (
    <footer className="px-4 py-8  w-full bg-black/95">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center font-Dancing justify-center text-white text-3xl w-16 h-10 rounded-full ">
            Junayd
          </div>
          
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a className='text-xl text-white' target='new' href="https://www.instagram.com/junayd_arshad">Instagram</a>
          </li>
          <li>
            <a className='text-xl text-white' target='new' href="https://www.facebook.com/junaid.arshad.9693">Facebook</a>
          </li>
          <li>
            <a className='text-xl text-white' target='new' href="https://www.linkedin.com/in/muhammad-junaid-arshad-55b351239/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}


export default Footer