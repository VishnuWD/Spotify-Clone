import { loginUrl } from '../spotify'

const Login = () => {
    
   
  return (
    <div className='bg-black h-[100vh] w-full grid place-items-center'>
        <img className='w-[70%] lg:w-[30%]' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
        <a className='text-white bg-[#1ED760] rounded-full p-[1rem_1.5rem] font-extrabold text-[1.2rem] lg:text-[1rem]' href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login