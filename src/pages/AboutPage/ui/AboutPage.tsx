import { Suspense } from "react";

export function Component(props: any) {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<div>About page</div>
			</Suspense>
		</>
	)
}
