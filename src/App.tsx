import React from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/globals.css";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <main>
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
