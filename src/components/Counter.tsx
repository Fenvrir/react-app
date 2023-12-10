import { useState } from "react"
import styles from "./Counter.module.scss"

function Counter() {
	const [count, setCount] = useState(0)
	return (
		<div className={styles.counter}> 
			<h1 className={styles.header}>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

export default Counter