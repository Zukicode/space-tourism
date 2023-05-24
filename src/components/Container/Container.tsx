import React from 'react';

//Styles
import styles from './Container.module.scss';

export interface ContainerProps {
	children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
