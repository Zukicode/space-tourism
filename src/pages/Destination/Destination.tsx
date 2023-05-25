import React from 'react';

//Styles
import styles from './Destination.module.scss';

//Components
import { Container } from 'components/Container/Container';

//Images
import moonImage from 'assets/destination/image-moon.png';

const Destination = () => {
	return (
		<div className={styles.destination}>
			<Container>
				<div className={styles.header}>
					<span>01</span>
					<h1>PICK YOUR DESTINATION</h1>
				</div>

				<div className={styles.content}>
					<div className={styles.image}>
						<img src={moonImage} alt='moon' />
					</div>

					<div className={styles.details}>
						<ul>
							<li className={styles.active}>MOON</li>
							<li>MARS</li>
							<li>EUROPA</li>
							<li>TITAN</li>
						</ul>

						<h1 className={styles.title}>MOON</h1>
						<p>
							See our planet as you’ve never seen it before. A perfect relaxing
							trip away to help regain perspective and come back refreshed.
							While you’re there, take in some history by visiting the Luna 2
							and Apollo 11 landing sites.
						</p>

						<div className={styles.distance}>
							<div className={styles.info}>
								<span>AVG. DISTANCE</span>
								<h1>384,400 KM</h1>
							</div>
							<div className={styles.info}>
								<span>EST. TRAVEL TIME</span>
								<span>3 DAYS</span>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Destination;
