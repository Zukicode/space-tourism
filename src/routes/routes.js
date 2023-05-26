import Home from 'pages/Home/Home';
import Destination from 'pages/Destination/Destination';
import Crew from 'pages/Crew/Crew';
import Tech from 'pages/Tech/Tech';

export const HOME_ROUTE = '/';
export const DESTINATION_ROUTE = '/destination';
export const CREW_ROUTE = '/crew';
export const TECHNOLOGY_ROUTE = '/technology';

export const ListRoutes = [
	{
		path: HOME_ROUTE,
		element: <Home />,
	},
	{
		path: DESTINATION_ROUTE,
		element: <Destination />,
	},
	{
		path: CREW_ROUTE,
		element: <Crew />,
	},
	{
		path: TECHNOLOGY_ROUTE,
		element: <Tech />,
	},
];
