import React from 'react';
import ReactDOM from 'react-dom/client';

//Styles
import './styles/index.scss';

//Components
import { App } from './components/App/App';

//Router
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>
);
