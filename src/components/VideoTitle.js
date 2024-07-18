import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-64 px-12 absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl m-10 text-cyan-100'>{title}</h1>
        <h2 className='font-bold m-10 w-1/2 text-cyan-100'>{overview}</h2>
        <div>
            <button className='p-3 ml-10 bg-slate-400 text-black rounded-lg font-bold hover:opacity-70'>Play</button>
            <button className='p-3 ml-10 bg-slate-400 text-black rounded-lg font-bold'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle