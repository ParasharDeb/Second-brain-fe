
import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Cardcomponent } from './components/card'
import { CreateContentModal } from './components/CreateContentModal'
import { Plusicon } from './icons/plusicon'
import { Shareicon } from './icons/shareicon'


function App() {
  const [showmodal,setshowmodal]=useState(true);
  return (
    <div>
    <CreateContentModal open={showmodal} onClose={()=>{setshowmodal(false)}}/>
    <div className='h-screen bg-yellow-200 '>
    <div className='flex justify-center m-10 space-x-6   '>
      <Button varient='primary' text='Create content' starticon={<Plusicon/>} onClick={()=>setshowmodal(true)}/>
      <Button varient='secondary' text='Share Brain' starticon={<Shareicon/>} />
    </div>
    <div className='flex'>
      <Cardcomponent title='Dank Rishu on Samay Raina' link='https://www.youtube.com/watch?v=8tfsAw6MHR8' type='youtube'/>
      <Cardcomponent title='Dank Rishu on Samay Raina' link='https://youtu.be/1KtuTi3g8Sk?si=j4hssgxxtgBwfEbs' type='youtube'/>
      <Cardcomponent title='Live' link='https://www.youtube.com/live/kxOW6JO5lYE?si=WJFbRwXk4B5ucbYg' type='youtube'/>
    
    </div>

    </div>
    </div>
  )
}

export default App
