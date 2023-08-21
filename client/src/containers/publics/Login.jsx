import React from 'react'
import { Button, InputFomr } from '../../components'

const Login = () => {
  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-2xl mb-3'>ĐĂNG NHẬP</h3>
      <div className='w-full flex flex-col gap-5'>
        <InputFomr label={'SỐ ĐIỆN THOẠI'}/>
        <InputFomr label={'MẬT KHẨU'}/>
        <Button text={'Đăng Nhập'} textColor={'text-white'} bgColor={'bg-secondary1'} fullWidth />
      </div>
      <div className='mt-7 flex items-center justify-between'>
        <small className='text-[blue] hover:text-[red] cursor-pointer'>Bạn quên mật khẩu?</small>
        <small className='text-[blue] hover:text-[red] cursor-pointer'>Bạn chưa có tài khoản</small>
      </div>
    </div>
  )
}

export default Login