import React, { useEffect } from 'react';

//Styles
import styles from './App.module.scss';

//Pages
import Home from 'pages/Home/Home';
import Destination from 'pages/Destination/Destination';
import Crew from 'pages/Crew/Crew';
import Tech from 'pages/Tech/Tech';

//Components
import { Header } from '../Header/Header';
import { AllRoutes } from 'routes/AllRoutes';

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />

			<AllRoutes />
		</div>
	);
};
