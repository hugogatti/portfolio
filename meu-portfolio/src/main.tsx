import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*Alterar o tema no theme.ts (cor principal, secundaria, error)*/}
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
