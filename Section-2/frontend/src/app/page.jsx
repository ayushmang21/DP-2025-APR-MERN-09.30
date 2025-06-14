import Btn from '@/components/Btn';
import Card from '@/components/Card';
import React from 'react'

const page = () => {
  return (
    <div className='h-screen'>
      <div className='text-9xl text-amber-600' >Hello World</div>

      <Btn />
      <Card title="ABc" description="ffughhih" />
      <Card title="ABdjqwjdowqjdojc" description="fewfwefwefewfewfih" />

    </div>
  )
}

export default page;