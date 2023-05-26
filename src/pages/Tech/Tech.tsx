import { useEffect, useState } from 'react';

//Styles
import styles from './Tech.module.scss';

//Components
import { Container } from 'components/Container/Container';

import data from 'data.json';

import { isMobileDevice } from 'utils/isMobileDevice';

interface ITech {
	name: string;
	images: {
		portrait: string;
		landscape: string;
	};
	description: string;
}

const Tech = () => {
	const [techData, setTechData] = useState<ITech[]>([]);
	const [activeTech, setActiveTech] = useState<ITech>();
	const [selectTech, setSelectTech] = useState(0);
	const [animation, setAnimation] = useState(false);

	console.log(navigator);

	useEffect(() => {
		setTechData(data.technology);
	}, []);

	useEffect(() => {
		setAnimation(true);
		setActiveTech(techData[selectTech]);
	}, [techData, selectTech]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimation(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [techData, selectTech]);

	return (
		<div className={styles.tech}>
			<Container>
				<div className={styles.header}>
					<span>03</span>
					<h1>SPACE LAUNCH 101</h1>
				</div>

				<div
					className={
						animation ? `${styles.content} ${styles.active}` : styles.content
					}
				>
					<div className={styles.details}>
						<div className={styles.chooseButtons}>
							<button
								onClick={() => setSelectTech(0)}
								className={selectTech === 0 ? styles.active : ''}
							>
								<span>1</span>
							</button>
							<button
								onClick={() => setSelectTech(1)}
								className={selectTech === 1 ? styles.active : ''}
							>
								<span>2</span>
							</button>
							<button
								onClick={() => setSelectTech(2)}
								className={selectTech === 2 ? styles.active : ''}
							>
								<span>3</span>
							</button>
						</div>

						<div className={styles.texts}>
							<div className={styles.title}>
								<span>THE TERMINOLOGY…</span>
								<h1>{activeTech?.name}</h1>
							</div>

							<p>{activeTech?.description}</p>
						</div>
					</div>

					<div className={styles.image}>
						<div
							style={{
								backgroundImage: `url("${
									isMobileDevice()
										? activeTech?.images.landscape
										: activeTech?.images.portrait
								}")`,
							}}
							className={styles.img}
						></div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Tech;
