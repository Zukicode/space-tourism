import React from 'react';

//Styles
import styles from './Home.module.scss';

//Components
import { Container } from '../../components/Container/Container';

import { useNavigate } from 'react-router-dom';
import { DESTINATION_ROUTE } from 'routes/routes';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.home}>
			<Container>
				<div className={styles.description}>
					<h2>SO, YOU WANT TO TRAVEL TO</h2>
					<div className={styles.spaceLogo}></div>
					<p>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>

				<div className={styles.button}>
					<div className={styles.buttonEffect}>
						<button onClick={() => navigate(DESTINATION_ROUTE)}>EXPLORE</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
