import React from 'react';

//Styles
import styles from './Crew.module.scss';

//Components
import { Container } from 'components/Container/Container';

//Images
import douglas from 'assets/crew/image-douglas-hurley.png';

const Crew = () => {
	return (
		<div className={styles.crew}>
			<Container>
				<div className={styles.header}>
					<span>02</span>
					<h1>MEET YOUR CREW</h1>
				</div>

				<div className={styles.content}>
					<div className={styles.details}>
						<p className={styles.pos}>COMMANDER</p>
						<h1 className={styles.title}>Douglas Hurley</h1>
						<p className={styles.description}>
							Douglas Gerald Hurley is an American engineer, former Marine Corps
							pilot and former NASA astronaut. He launched into space for the
							third time as commander of Crew Dragon Demo-2.
						</p>

						<div className={styles.choose}>
							<div className={styles.active}></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>

					<div className={styles.image}>
						<img src={douglas} alt='moon' />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Crew;
