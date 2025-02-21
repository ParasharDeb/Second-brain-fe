
import { useState } from 'react'

import { Button } from '../components/Button'
import { Cardcomponent } from '../components/card'
import { CreateContentModal } from '../components/CreateContentModal'
import { Plusicon } from '../icons/plusicon'
import { Shareicon } from '../icons/shareicon'
import { Sidebar } from '../components/sidebar'



export const Dashboard=()=>{


          const [showmodal, setshowmodal] = useState(false);
          return (
            
            <div className='bg-slate-100 min-h-screen ml-56'>
              <Sidebar/>
              <CreateContentModal open={showmodal} onClose={() => { setshowmodal(false) }} />
              
                <div className='flex justify-end p-4 gap-6  '>
                  <Button varient='primary' text='Create content' starticon={<Plusicon />} onClick={() => setshowmodal(true)} />
                  <Button varient='secondary' text='Share Brain' starticon={<Shareicon />} />
                </div>
                <div className='flex'>
                  <Cardcomponent title='Dank Rishu on Samay Raina' link='https://www.youtube.com/watch?v=8tfsAw6MHR8' type='youtube' />
                  <Cardcomponent title='Dank Rishu on Samay Raina' link='https://youtu.be/1KtuTi3g8Sk?si=j4hssgxxtgBwfEbs' type='youtube' />
                  <Cardcomponent title='Live' link='https://www.youtube.com/live/kxOW6JO5lYE?si=WJFbRwXk4B5ucbYg' type='youtube' />
        
                </div>
        
              
            </div>
          )
        
    
}