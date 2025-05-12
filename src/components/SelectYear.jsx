import React from 'react'



export default function SelectYear({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    
    <div>
<select
  className="select"
  onChange={handleChange}
  onClick={(e) => {
    e.stopPropagation();
    
  }}
  defaultValue="" // Esto es importante para que funcione el placeholder
>
  <option value="" disabled hidden>Select year</option> {/* Placeholder */}
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
</select>
    </div>
  )
}
