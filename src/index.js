//Importar React y React Dom
import React from 'react';
// import ReactDOM from 'react-dom'
//Importar react-dom/client (createRoot)
import { createRoot } from 'react-dom/client';
//Importamos el componente principal App
import App from './components/App';

//Renderizamos el componente App en el punto de entrada de nuestra aplicación
// ReactDOM.render(<App/>, document.getElementById('app'))
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
