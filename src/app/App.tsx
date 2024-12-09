import { TodoCard } from '@widget/Todo'

function App() {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<TodoCard />
		</div>
	)
}

export default App
