import { useEffect, useState } from 'react';

//Styles
import styles from './Destination.module.scss';

//Components
import { Container } from 'components/Container/Container';

//Other
import data from 'data.json';

interface IPlanet {
	name: string;
	description: string;
	distance: string;
	images: {
		png: string;
		webp: string;
	};
	travel: string;
}

const Destination = () => {
	const [destinationData, setDestinationData] = useState<IPlanet[]>([]);
	const [activePlanet, setActivePlanet] = useState<IPlanet>();
	const [selectPlanet, setSelectPlanet] = useState(0);
	const [animation, setAnimation] = useState(false);

	useEffect(() => {
		setDestinationData(data.destinations);
	}, []);

	useEffect(() => {
		setAnimation(true);

		setActivePlanet(destinationData[selectPlanet]);
	}, [destinationData, selectPlanet]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimation(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [destinationData, selectPlanet]);

	return (
		<div className={styles.destination}>
			<Container>
				<div className={styles.header}>
					<span>01</span>
					<h1>PICK YOUR DESTINATION</h1>
				</div>

				<div
					className={
						animation ? `${styles.content} ${styles.active}` : styles.content
					}
				>
					<div className={styles.image}>
						<img src={activePlanet && activePlanet.images.png} alt='planet' />
					</div>

					<div className={styles.details}>
						<ul>
							<li
								onClick={() => setSelectPlanet(0)}
								className={selectPlanet === 0 ? styles.active : ''}
							>
								MOON
							</li>
							<li
								onClick={() => setSelectPlanet(1)}
								className={selectPlanet === 1 ? styles.active : ''}
							>
								MARS
							</li>
							<li
								onClick={() => setSelectPlanet(2)}
								className={selectPlanet === 2 ? styles.active : ''}
							>
								EUROPA
							</li>
							<li
								onClick={() => setSelectPlanet(3)}
								className={selectPlanet === 3 ? styles.active : ''}
							>
								TITAN
							</li>
						</ul>

						<h1 className={styles.title}>
							{activePlanet && activePlanet.name}
						</h1>
						<p className={styles.description}>
							{activePlanet && activePlanet.description}
						</p>

						<div className={styles.distance}>
							<div className={styles.info}>
								<span>AVG. DISTANCE</span>

								<h1>{activePlanet && activePlanet.distance}</h1>
							</div>

							<div className={styles.info}>
								<span>EST. TRAVEL TIME</span>
								<h1>{activePlanet && activePlanet.travel}</h1>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Destination;
