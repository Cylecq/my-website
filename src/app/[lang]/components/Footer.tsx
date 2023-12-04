import React from 'react'
import LocaleSwitcher from './LocalSwitcher'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='w-full h-20 flex justify-center items-center border-t shadow-inner'>
        <div className='bg-gray-100 w-full h-full z-20 flex justify-center items-center'>
        <LocaleSwitcher />
        </div>
    </footer>
  )
}

export default Footer