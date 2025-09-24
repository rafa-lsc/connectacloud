import React from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/globals.css";
import ErrorBoundary from "./components/Error/ErrorBoundary";

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div>
          <Header />
          <main>
            <Dashboard />
          </main>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
