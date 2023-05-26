import { useEffect, useState } from 'react';

//Styles
import styles from './Crew.module.scss';

//Components
import { Container } from 'components/Container/Container';

//Other
import data from 'data.json';

interface IPerson {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	role: string;
	bio: string;
}

const Crew = () => {
	const [crewData, setCrewData] = useState<IPerson[]>([]);
	const [activePerson, setActivePerson] = useState<IPerson>();
	const [selectPerson, setSelectPerson] = useState(0);
	const [animation, setAnimation] = useState(false);

	useEffect(() => {
		setCrewData(data.crew);
	}, []);

	useEffect(() => {
		setAnimation(true);
		setActivePerson(crewData[selectPerson]);
	}, [crewData, selectPerson]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimation(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [crewData, selectPerson]);

	return (
		<div className={styles.crew}>
			<Container>
				<div className={styles.header}>
					<span>02</span>
					<h1>MEET YOUR CREW</h1>
				</div>

				<div
					className={
						animation ? `${styles.content} ${styles.active}` : styles.content
					}
				>
					<div className={styles.details}>
						<p className={styles.pos}>{activePerson && activePerson.role}</p>
						<h1 className={styles.title}>
							{activePerson && activePerson.name}
						</h1>
						<p className={styles.description}>
							{activePerson && activePerson.bio}
						</p>

						<div className={styles.choose}>
							<div
								className={selectPerson === 0 ? styles.active : ''}
								onClick={() => setSelectPerson(0)}
							></div>
							<div
								className={selectPerson === 1 ? styles.active : ''}
								onClick={() => setSelectPerson(1)}
							></div>
							<div
								className={selectPerson === 2 ? styles.active : ''}
								onClick={() => setSelectPerson(2)}
							></div>
							<div
								className={selectPerson === 3 ? styles.active : ''}
								onClick={() => setSelectPerson(3)}
							></div>
						</div>
					</div>

					<div className={styles.image}>
						<img src={activePerson && activePerson.images.png} alt='person' />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Crew;
