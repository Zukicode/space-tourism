import { Route, Routes } from 'react-router-dom';
import { ListRoutes } from './routes';

export const AllRoutes = () => {
	return (
		<Routes>
			{ListRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};
