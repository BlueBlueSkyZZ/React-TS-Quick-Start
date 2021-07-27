import { Canvas } from './Components/Canvas_Class';
import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <Canvas/>
  </React.StrictMode>,
  document.getElementById('root')
);

