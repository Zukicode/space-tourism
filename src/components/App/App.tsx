import React from 'react';

//Styles
import styles from './App.module.scss';

//Pages
import Home from '../../pages/Home/Home';

//Components
import { Header } from '../Header/Header';
import Destination from '../../pages/Destination/Destination';

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			{/* <Home /> */}
			<Destination />
		</div>
	);
};
