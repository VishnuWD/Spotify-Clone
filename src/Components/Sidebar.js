import React from 'react'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../Context/DataLayer';

const Sidebar = () => {
  
  const [{playlists}, dispatch] = useDataLayerValue()
  
  return (
    
    <div className='h-[100vh] text-white flex-[0.2] bg-[#040404] min-w-[230px] px-[10px]'> 
    <img className='w-[100%] p-[10%_30%_10%_5%]' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt="spotify logo"/>
    <SidebarOptions Icon={HomeIcon} title="home"/>
    <SidebarOptions Icon={SearchIcon} title="Search"/>
    <SidebarOptions Icon={LibraryMusicIcon} title="Your Library"/>

    <h3 className='font-semibold m-[10px] text-sm'>Playlists</h3>
    <hr className='border-[#282828] border w-[90%] m-[10px_auto] '/>
    
    {playlists?.items?.map(playlist => (
      <SidebarOptions title={playlist.name}/>
    ))}
    </div>
  )
}

export default Sidebar