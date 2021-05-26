import React, { useState, useEffect } from 'react'

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0)
  const inclementNum = () => {
    console.log('mouse event');
    setCurrentNum(prevNum => ++prevNum)
  }
  useEffect(() => {
    console.log('useEffect clean up');
    window.addEventListener('mousedown', inclementNum)
    // effect
    return () => {
      console.log(('clean up!!'));
      window.removeEventListener('mousedown', inclementNum)
    }
  }, [])
  return (
    <div>
      {currentNum}
    </div>
  )
}

export default CleanUp
