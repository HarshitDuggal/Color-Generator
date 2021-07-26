import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setcolor] = useState('');
  const [error, seterror] = useState(false);
  const [list, setlist] = useState(new Values('#f10525').all(10));
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setlist(colors)
      seterror(false)
    } catch (error) {
      seterror(true)
      console.log(error);
    }
  }
  return <>
    <section className = 'container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={color} placeholder='#f15025' className = {`${error?'error': null}`} onChange={(e) => setcolor(e.target.value)}/>
        <button type='submit' className='btn'>Generate</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color,index) => {
        return < SingleColor key={index} {...color} index={index} hexcolor = {color.hex} />
      })}
    </section>
  </>
}

export default App