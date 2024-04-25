import React from 'react'
import User from '../assests/user.png'
const Admin = () => {
  return (
    <div className='flex'>
        <div className=' h-screen w-[250px] bg-[#1f1d28]  border border-black flex flex-col'>
            <div className=' m-5 p-5 flex flex-col justify-center items-center'>
                <div>
                    <img src={User} alt="profile" className='h-[100px]' />
                </div>
                <div className='text-[#f1f1f2] text-xl text-center font-bold pt-2'>User Name</div>
                <div className='text-[#54525d] text-[15px] font-bold'>Number of Files</div>
                <div className='my-3'>
                    <button className=' bg-[#ea5a5a] text-white py-1 px-10 rounded-full font-bold hover:bg-[#ce5151]'>UPLOAD</button>
                </div>
            </div>
        </div>
        <div>
            Right Side
        </div>
    </div>
  )
}

export default Admin
