import { useUIStore } from './stores'
import Index from './pages'
import { useEffect } from 'react'
import Loading from './components/loading'

function App() {
	const { isLoading, init } = useUIStore((state) => state)

	useEffect(() => {
		init()
	}, [])

	if (isLoading) {
		return <Loading />
	}
	return (
		<div className='flex flex-col w-screen h-screen'>
			<Index />
		</div>
	)
}

export default App
