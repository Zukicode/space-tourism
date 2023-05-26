//Styles
import styles from './App.module.scss';

//Component
import { Header } from '../Header/Header';

//Route
import { AllRoutes } from 'routes/AllRoutes';

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			<AllRoutes />
		</div>
	);
};
