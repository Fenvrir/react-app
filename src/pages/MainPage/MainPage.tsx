import { Suspense, useContext } from "react"
import Counter from "../../components/Counter"

export function Component(props: any) {
	return (
		<>
			{/* 
				TODO: Suspense как-то непонятно работает в react-router-dom 6.4
				Добавил пока что в таком стиле. Нужно проверить работоспособность в будущем. 
			*/}
			<Suspense fallback={<div>Loading...</div>}>
				<Counter />
				<div>MainPage</div>
			</Suspense>
		</>
	)
}
