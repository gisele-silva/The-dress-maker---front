import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function Cadastro (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigator = useNavigate();

    async function submitar (e) {
        e.preventDefault();
        const body = {email, password, name, confirmPassword}
        try {
            await axios.post('http://localhost:5009/cadastro', body);
            navigator('/')
        } catch (error) {
            console.error('Erro ao se cadastrar')
        }
    }

    return (
        <div className="">
            <form>
                <input type="text" placeholder='nome' onChange={e => setName(e.target.value)}></input><br />
                <input type="text" placeholder='email' onChange={e => setEmail(e.target.value)}></input><br />
                <input type="password" placeholder='senha' onChange={e => setPassword(e.target.value)}></input><br />
                <input type="password" placeholder='confirmar senha' onChange={e => setConfirmPassword(e.target.value)}></input><br />
                <button type="submit" onClick={submitar}>Cadastrar</button>
                <p><Link to="/" style={{color: 'white', fontSize: 14}}>Já tem uma conta? Entre agora!</Link></p>
            </form>
        </div>
    )
}