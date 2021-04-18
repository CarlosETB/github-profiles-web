import React from 'react';

// Routes
import Routes from 'routes'

// Contexts
import { UserProvider } from "contexts/UserContext";

// Locales
import "locales";

// Styles
import './styles/global.scss';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  )
}

export default App;
