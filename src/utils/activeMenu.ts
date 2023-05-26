import {
	CREW_ROUTE,
	DESTINATION_ROUTE,
	HOME_ROUTE,
	TECHNOLOGY_ROUTE,
} from 'routes/routes';

export const validateActiveMenu = (route: string) => {
	if (route === HOME_ROUTE) {
		return 0;
	} else if (route === DESTINATION_ROUTE) {
		return 1;
	} else if (route === CREW_ROUTE) {
		return 2;
	} else if (route === TECHNOLOGY_ROUTE) {
		return 3;
	}

	return 0;
};
