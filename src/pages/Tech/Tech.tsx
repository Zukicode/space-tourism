import React from 'react';

//Styles
import styles from './Tech.module.scss';

//Components
import { Container } from 'components/Container/Container';

const Tech = () => {
	return (
		<div className={styles.tech}>
			<Container>
				<div className={styles.header}>
					<span>03</span>
					<h1>SPACE LAUNCH 101</h1>
				</div>

				<div className={styles.content}>
					<div className={styles.details}>
						<div className={styles.chooseButtons}>
							<button className={styles.active}>
								<span>1</span>
							</button>
							<button>
								<span>2</span>
							</button>
							<button>
								<span>3</span>
							</button>
						</div>

						<div className={styles.texts}>
							<div className={styles.title}>
								<span>THE TERMINOLOGY…</span>
								<h1>LAUNCH VEHICLE</h1>
							</div>

							<p>
								A launch vehicle or carrier rocket is a rocket-propelled vehicle
								used to carry a payload from Earth's surface to space, usually
								to Earth orbit or beyond. Our WEB-X carrier rocket is the most
								powerful in operation. Standing 150 metres tall, it's quite an
								awe-inspiring sight on the launch pad!
							</p>
						</div>
					</div>

					<div className={styles.image}>
						<div className={styles.img}></div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Tech;
