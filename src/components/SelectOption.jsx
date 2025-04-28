import React from 'react'



export default function SelectOption({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <div>
      <select onChange={handleChange}>
        <option value="name">Name</option>
        <option value="rating">Rating</option>
        <option value="released">Launch Date</option>
      </select>
    </div>
  )
}
