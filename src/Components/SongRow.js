import React from 'react'

const SongRow = ({track}) => {
  return (
    <div className='ml-[20px] p-[20px] flex items-center z-50 text-white hover:cursor-pointer hover:bg-black hover:opacity-[0.8]'>
        <img className='h-[40px] w-[40-px] ' src={track.album.images[0].url} alt='Album'/>
        
        <div className='ml-[20px]'>
        <h1 className='text-[16px]'>{track.name}</h1>
            <p className='text-[14px] mt-[3px] text-gray-500 '> 
                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
            </p>
        </div>

    </div>
  )
}

export default SongRow