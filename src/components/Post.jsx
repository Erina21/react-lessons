import React, { useState } from 'react'

function Post() {
    const [like, setlike] = useState(false)
  return (
    <div>
      
          <button style={{ backgroundColor: like ? 'red' : 'black' }} onClick={() => setlike(!false)}>
              {like ? 'like' : 'dislike'}
        </button>

        
    </div>
  )
}

export default Post