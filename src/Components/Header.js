import React from 'react'
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useDataLayerValue } from '../Context/DataLayer'

const Header = ({spotify}) => {

    const [{user}, dispatch] = useDataLayerValue()

  return (
    <div id='header' className='flex justify-between mb-[30px]'>
        <div className='header_left bg-white text-gray-500 rounded-[30px] flex items-center p-[10px] flex-[0.5]'>
           <SearchIcon />
           <input className='border-none w-full' type="text" placeholder='Search for Artists, songs' />
        </div>
        
        <div className='header_right flex items-center'>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4 className='ml-[10px]'>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header