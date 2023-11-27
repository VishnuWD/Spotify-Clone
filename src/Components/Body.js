import React from 'react'
import Header from './Header'
import { useDataLayerValue } from '../Context/DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SongRow from './SongRow'

const Body = ({spotify}) => {

const [{discover_weekly}, dispatch] = useDataLayerValue()

  return (
    <div className='h-[100vh] flex-[0.8] bg-gradient-to-b from-[rgb(91,87,115)] to-[#040404] p-[30px] text-white overflow-y-auto'>
      <Header spotify={spotify}/>

      <div className='flex items-end p-[10px]'>
        <img className='h-[20vw] mx-[20px] shadow-black shadow-lg' src={discover_weekly?.images[0]?.url} alt=''/>
        <div id='body_infotext' className='flex-[1]'>
          <strong>PLAYLIST</strong>
          <h2 className='text-[48px] mb-[10px] font-medium leading-[120%]'>Discover Weekly</h2>
          <p className='text-[14px]'>{discover_weekly?.description}</p>
        </div>
      </div>
    
      <div id='songs' className='m-[20px_-30px]'>
      <div className='body__icons flex items-center '>
        <PlayCircleFilledIcon className='min-w-[50px] min-h-[50px] ml-[50px] mt-[20px] mb-[20px]'/>
        <FavoriteIcon/>
        <MoreHorizIcon/>
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track}/>
        ))}
      </div>
    </div>
  )
}

export default Body