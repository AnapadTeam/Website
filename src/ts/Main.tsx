import React from "react"
import { createRoot } from 'react-dom/client';

import MainView from "./view/MainView"

// Render 'MainView'
createRoot(document.getElementById('root')!).render(<MainView/>);
