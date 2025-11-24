import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import store from './redux/store.js';
import {Provider} from 'react-redux'

const theme = createTheme({
  palette:{
    primary:{
      main:'#8b00ccff'
    },
    secondary:{
      main:'#a36a43ff'
    }
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
