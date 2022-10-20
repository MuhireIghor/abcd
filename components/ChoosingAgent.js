import Image from 'next/image'
import React from 'react'

export const ChoosingAgent = () => {
  return (
    <div className='flex gap-8 py-4 px-2'>
        <Image
          src='/images/chooseAgent.png'
          alt='img 8246'
          width={514}
          height={514}
          className=''
        />
        <div className=''>
          <p className='text-2xl font-bold text-blue-500 text-xs font-normal'>CHOOSING YOUR AGENT</p>
          <h1></h1>
          <p className='text-gray-800 font-regular text-md'>
            You should choose an agent you are comfortable working with and who you feel has your best interests at heart. In order to make a decision, try asking prospective agents the following:
          </p>
          <div className='mt-3 font-medium text-gray-800'>
            <div className='flex gap-2 items-center'>
              <div className='w-4 h-4 rounded-b-md'></div>
              <p className=''>How and where your property will be advertised</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-4 h-4 rounded-b-md'></div>
              <p className=''>Ask to see examples of their success in selling properties like yours</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-4 h-4 rounded-b-md'></div>
              <p className=''>How often you can expect feedback from the agent while your property is on the market</p>
            </div>
          </div>
          <button className='flex gap-2 bg-blue-400 text-white px-1 py-2'>Find an agent</button>
        </div>
    </div>
  )
}
