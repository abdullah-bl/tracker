import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import NotFound from './notfound'
import Search from './search'

import Home from './home'


import Settings from './settings'
import SettingsLanding from './settings/Landing'
import Imports from './settings/imports'



export default function Index() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={<Search />} />
				<Route path='settings' element={<Settings />}>
					<Route index element={<SettingsLanding />} />
					<Route path='imports' element={<Imports />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
