import { useState } from 'react'

const NameChanger = ({ handler }) => {
  const [childName, setChildName] = useState('')

  return (
    <div>
      <input
        value={childName}
        onChange={e => setChildName(e.target.value)}
      />
      <button onClick={() => handler(childName)}>
        Change Name
      </button>
    </div>
  )
}

export default NameChanger