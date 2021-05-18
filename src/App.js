import { useState } from 'react'
import NameChanger from './NameChanger'

const App = () => {
  const [name, setName] = useState('jd')
  const [age, setAge] = useState(25)

  const handleStuff = newName => {
    setName(newName)
  }

  return (
    <div>
      <h1>
        dude bro, my name is {name}, and i'm {age} years old
      </h1>
      <NameChanger handler={handleStuff} />
    </div>
  );
}

export default App;
