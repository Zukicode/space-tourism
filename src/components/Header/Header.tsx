import { useEffect, useState } from 'react';

//Styles
import styles from './Header.module.scss';

//Components
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

//Route
import {
	CREW_ROUTE,
	DESTINATION_ROUTE,
	HOME_ROUTE,
	TECHNOLOGY_ROUTE,
} from 'routes/routes';

import { useLocation, useNavigate } from 'react-router-dom';
import { validateActiveMenu } from 'utils/activeMenu';

export const Header = () => {
	const [showMobile, setShowMobile] = useState<boolean>(false);
	const [activeMenu, setActiveMenu] = useState<number>(0);

	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		setActiveMenu(validateActiveMenu(pathname));
	}, [pathname]);

	const toggleMenu = () => setShowMobile(!showMobile);

	return (
		<>
			<div className={styles.header}>
				<div onClick={() => navigate(HOME_ROUTE)} className={styles.logo}></div>

				<div className={styles.line}></div>

				<div className={styles.menu}>
					<ul>
						<li
							onClick={() => navigate(HOME_ROUTE)}
							className={activeMenu === 0 ? styles.active : ''}
						>
							<span>00</span>
							<a>HOME</a>
						</li>
						<li
							onClick={() => navigate(DESTINATION_ROUTE)}
							className={activeMenu === 1 ? styles.active : ''}
						>
							<span>01</span>
							<a>DESTINATION</a>
						</li>
						<li
							onClick={() => navigate(CREW_ROUTE)}
							className={activeMenu === 2 ? styles.active : ''}
						>
							<span>02</span>
							<a>CREW</a>
						</li>
						<li
							onClick={() => navigate(TECHNOLOGY_ROUTE)}
							className={activeMenu === 3 ? styles.active : ''}
						>
							<span>03</span>
							<a>TECHNOLOGY</a>
						</li>
					</ul>
				</div>

				<div className={styles.mobile}>
					<div onClick={toggleMenu} className={styles.mobileIcon}></div>
				</div>
			</div>

			{true && <MobileMenu showMobile={showMobile} toggleMenu={toggleMenu} />}
		</>
	);
};
