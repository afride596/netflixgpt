import React from 'react'
import { LOGO_URL } from '../utils/constant'

const LoginHeader = () => {
  return (
    <div className="bg-black flex justify-center relative z-50 "> <img className=" w-36 md:w-48" src={LOGO_URL} alt="" /></div>
  )
}

export default LoginHeader