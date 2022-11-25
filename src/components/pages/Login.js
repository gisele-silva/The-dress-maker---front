import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import { useContext, useState } from "react"
import UserContext from '../context/UserContext'

export default function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const navigator = useNavigate

    async function submitar (e) {
        e.preventDefault()
        const body = {email, password}
        try {
            const {data} = await axios.post("http://localhost:5009/login", body);
            setUser(data);
            navigator("/home")
        } catch (error) {
            console.error('Erro no login');
        }
    }

    return (
        <div className="">
            <form>
                <input type="text" placeholder='email' onChange={e => setEmail(e.target.value)}></input><br />
                <input type="password" placeholder='senha' onChange={e => setPassword(e.target.value)}></input><br />
                <button type="submit" onClick={submitar}>Entrar</button>
                <p><Link to="/cadastro" style={{color: 'white', fontSize: 14}}>Primeira vez? Cadastrate-se!</Link></p>
            </form>
        </div>
    )
}