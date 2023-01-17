import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mypage from './pages/mypage'
import Login from './pages/login'
import Review from './pages/review'
import Home from './pages/home'
import Header from './components/common/header'
import styles from './App.css'
function App() {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/review' element={<Review />}></Route>
                    <Route path='/mypage' element={<Mypage />}></Route>
                </Routes>
                {/* footer */}
            </BrowserRouter>
        </div>
    )
}

export default App
