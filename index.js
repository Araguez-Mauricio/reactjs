import React from 'react';  //crear componentes
import {render} from 'react-dom'; // renderiza los componentes en el navegador
import Media from './src/playlist/components/media'; // importa el componente incluido en el archivo media.js



const app = document.getElementById('app')
//const holamundo = <h1>hola mauri</h1> ;
//ReactDOM.render(<Media />,app);

render(<Media type="video" title="¿que es resposive desing?" author="MauricioAraguez" image="./images/covers/paisaje2.jpg"/> , app);

//console.log('hola mundo') 