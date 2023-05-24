import React from 'react';

//Styles
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}></div>

			<div className={styles.line}></div>

			<div className={styles.menu}>
				<ul>
					<li className={styles.active}>
						<span>00</span>
						<a href=''>HOME</a>
					</li>
					<li>
						<span>01</span>
						<a href=''>DESTINATION</a>
					</li>
					<li>
						<span>02</span>
						<a href=''>CREW</a>
					</li>
					<li>
						<span>03</span>
						<a href=''>TECHNOLOGY</a>
					</li>
				</ul>
			</div>

			<div className={styles.mobile}>
				<div className={styles.mobileIcon}></div>
			</div>
		</div>
	);
};
