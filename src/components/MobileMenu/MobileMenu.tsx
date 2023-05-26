//Styles
import { useNavigate } from 'react-router-dom';
import {
	CREW_ROUTE,
	DESTINATION_ROUTE,
	HOME_ROUTE,
	TECHNOLOGY_ROUTE,
} from 'routes/routes';
import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
	showMobile: boolean;
	toggleMenu: () => void;
}

export const MobileMenu = ({ showMobile, toggleMenu }: MobileMenuProps) => {
	const navigate = useNavigate();
	const closeMenu = () => toggleMenu();

	return (
		<div
			className={showMobile ? `${styles.menu} ${styles.active}` : styles.menu}
		>
			<div className={styles.header}>
				<button onClick={closeMenu}>
					<img src='assets/shared/icon-close.svg' alt='close' />
				</button>
			</div>

			<div className={styles.nav}>
				<ul>
					<li onClick={() => navigate(HOME_ROUTE)}>
						<span>00</span>
						<a>HOME</a>
					</li>
					<li onClick={() => navigate(DESTINATION_ROUTE)}>
						<span>01</span>
						<a>DESTINATION</a>
					</li>
					<li onClick={() => navigate(CREW_ROUTE)}>
						<span>02</span>
						<a>CREW</a>
					</li>
					<li onClick={() => navigate(TECHNOLOGY_ROUTE)}>
						<span>03</span>
						<a>TECHNOLOGY</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
