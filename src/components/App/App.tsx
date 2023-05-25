import React from 'react';

//Styles
import styles from './App.module.scss';

//Pages
import Home from '../../pages/Home/Home';
import Destination from '../../pages/Destination/Destination';
import Crew from 'pages/Crew/Crew';

//Components
import { Header } from '../Header/Header';

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			{/* <Home /> */}
			{/* <Destination /> */}
			<Crew />
		</div>
	);
};
