import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './components/pages/Cadastro'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import UserContext from "./context/UserContext"
import { useState } from 'react'

export default function App (){
    const [user, setUser] = useState(null);
    return (
        <div className="App">
            <UserContext.Provider value={{ user, setUser }}>
            <header className="App-header">The dress Maker
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            </header>
            </UserContext.Provider>
        </div>
    )
}
