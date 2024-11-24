import React from 'react'
import { Layout } from "antd"

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 96,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff'
}

const Header = () => {
  return (
    <Layout.Header style={headerStyle}>
      <nav className='flex items-center justify-between text-red-500 w-full h-24'>
        <div className='flex-1 flex items-center justify-center'>
          <div className='flex-shrink-0'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/3/38/Logo_UIT_updated.jpg'
              className='w-24 h-24 object-contain'
              alt='logo-uit'
              loading='lazy'
            />
          </div>
          <div className='ml-4 flex flex-col justify-center text-[#1F509A] font-bold uppercase'>
            <h3 className='text-xl'>trường đại học công nghệ thông tin - đhqg - hcm</h3>
            <p className='text-lg text-[#80C4E9]'>khoa hệ thống thông tin</p>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <div className='h-24 flex flex-col justify-center text-[#1F509A] font-bold uppercase items-center'>
            <h3 className='text-xl'>công cụ khuyến nghị fastfood-sys</h3>
            <p className='text-lg text-center text-[#80C4E9]'>môn học is254.p11 - nhóm 11
            </p>
          </div>
          <div className='flex-shrink-0 ml-4'>
            <img src='https://httt.uit.edu.vn/wp-content/uploads/2022/10/Logo-Khoa-HTTT.png'
              className='w-24 h-24 object-contain'
              alt='logo-is'
              loading='lazy'
            />
          </div>
        </div>
      </nav>
    </Layout.Header>
  )
}

export default Header