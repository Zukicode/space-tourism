import React from 'react';

//Styles
import styles from './MobileMenu.module.scss';

//Icons
import closeIcon from 'assets/shared/icon-close.svg';

interface MobileMenuProps {
	showMobile: boolean;
	toggleMenu: () => void;
}

export const MobileMenu = ({ showMobile, toggleMenu }: MobileMenuProps) => {
	const closeMenu = () => toggleMenu();

	return (
		<div
			className={showMobile ? `${styles.menu} ${styles.active}` : styles.menu}
		>
			<div className={styles.header}>
				<button onClick={closeMenu}>
					<img src={closeIcon} alt='close' />
				</button>
			</div>

			<div className={styles.nav}>
				<ul>
					<li>
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
		</div>
	);
};
