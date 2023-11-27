import React from 'react'

const SidebarOptions = ({title, Icon}) => {
  return (
    <div className='flex gap-2 text-gray-400 hover:text-white h-[40px] cursor-pointer transition-all m-[0_0_0_10px]'>
        {Icon && <Icon className=""/>}
       {Icon ? <h4>{title}</h4> : <p className='m-[10px_0_0_10px] text-sm'>{title}</p>}
    </div>
  )
}

export default SidebarOptions