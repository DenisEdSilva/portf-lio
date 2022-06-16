import { 
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import Header from './components/Header'

import Home from './pages/Home';
import Studys from './pages/Studys';
import Projects from './pages/Projects';

export default function AppRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/studys" element={<Studys />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</Router>
	);
}