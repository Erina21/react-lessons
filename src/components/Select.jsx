import React from 'react'

function Select({ value, onChange, options }) {
  return (
      <div>
          <select value={value} onChange={onChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
    </div>
  )
}

export default Select