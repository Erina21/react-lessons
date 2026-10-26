import React, { useState } from "react"

function Checkbox() {
    const [accept, setAccept] = useState(false)
  return (
      <div>
          <input type="checkbox"
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)} />
          <p>
              {accept ? "Accepted" : "Not Accepted"}
        </p>
    </div>
  )
}

export default Checkbox;