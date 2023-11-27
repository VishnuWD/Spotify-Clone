import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const Footer = () => {
  return (
    <div className='fixed bottom-0 h-[65px] w-full bg-[#282828] p-[20px] flex justify-between text-white gap-[10%]'>
      <div className='flex-[0.3] flex items-center max-w-[300px]'> 
        <img className='h-[50px] w-[50px] mr-[20px] object-contain ' src='' alt='album cover'/>
        <div className=''>
          <h4 className='mb-[5px]'>Yeah</h4>
          <p className='text-[12px]'>artist</p>
        </div>
      </div>

      <div className='flex-[0.4] flex justify-between items-center max-w-[300px]'> 
        <ShuffleIcon className='icon text-green-500'/>
        <SkipPreviousIcon className='icon' />
        <PlayCircleOutlineIcon fontSize='large' className='icon'/>
        <SkipNextIcon className='icon'/>
        <RepeatIcon className='icon text-green-500'/>
      </div>

      <div className='footer__right flex-[0.3] flex justify-between lg:max-w-[200px] '> 
      <Grid container spacing={2} >
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs >
            <Slider color='success' aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer