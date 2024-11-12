import { useState } from "react"


const About = () => {
  const [first, setfirst] = useState(0)
  let incrementnum=()=>{
    setfirst(first+1)
  }
let decrementnum=()=>{
  setfirst(first-1)

}


  return (
    <div className="main">
      <h1>value is {first}</h1>
      <button onClick={incrementnum}>increment</button>
      <br></br>
      <br></br>
      <button onClick={decrementnum}>decrement</button>
    </div>
  )
}

export default About