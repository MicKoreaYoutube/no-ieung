"use client"

import { Button } from '@/components/ui/button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'

import { animateScroll } from 'react-scroll'

export function MoverButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-1 shadow-lg">
      <Button variant="secondary" size="icon"onClick={()=>{
        animateScroll.scrollToTop({
          duration: 700,
          isDynamic: true
        })
      }}><FontAwesomeIcon icon={faUpLong} /></Button>
      <Button variant="secondary" size="icon" onClick={()=>{
        animateScroll.scrollToBottom({
          duration: 700,
          isDynamic: true
        })
      }}><FontAwesomeIcon icon={faDownLong} /></Button>
    </div>
  )
}
