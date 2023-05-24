import React from 'react';

//Styles
import styles from './App.module.scss';

//Pages
import Home from '../../pages/Home';

//Components
import { Header } from '../Header/Header';

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			<Home />
		</div>
	);
};
