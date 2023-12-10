import { useState } from "react"
import "./Counter.scss"

function Counter() {
	const [count, setCount] = useState(0)
	return (
		<div className="counter"> 
			<h1 className="header">{count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

export default Counter