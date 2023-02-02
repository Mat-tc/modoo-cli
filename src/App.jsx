import "./App.css"
import React, { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Mypage from "./pages/mypage"
import Login from "./pages/login"
import Review from "./pages/review"
import Home from "./pages/home"
import Header from "./components/common/header"
import Board from "@page/board"
import styles from "./App.css"
import Signup from "./pages/signup"
export const ThemeContext = createContext()
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const darkModeTheme = {
    darkMode,
    setDarkMode,
  }
  return (
    <ThemeContext.Provider value={darkModeTheme}>
      <div className={styles.app}>
        <BrowserRouter>
          <Header />
          <main className={darkMode ? "dark" : "light"}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/review" element={<Review />} />

              <Route exact path="/board" element={<Board />} />
              <Route exact path="/mypage" element={<Mypage />} />
            </Routes>
          </main>
          {/* footer */}
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
