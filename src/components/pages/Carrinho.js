import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Shop(){

    const [produto, setProduto] = useState([]);
    const [items, setItems] = useState();
    const navigate = useNavigate();
    const token = 0; 
    useEffect(() => {
        const URL = "http://localhost:5000/home";
        
    
        const promise = axios.get(URL);
        promise.then((res) => { setItems(res.data)})
        promise.catch((err) => {console.log(err.response.data)})
    },[])
  
   function comprarProduto(){
    if(!token){
        navigate("/login")
    }
    else{
        if(!window.confirm("Deseja finalizar a compra?")){
            return;
        }
        const URL = "http://localhost:5000/home";
        const body = produto;

        const config = {
            headers: {Authorization: `Bearer ${token}`,},};

        const promise = axios.put(URL, body, config);
        promise.then((res) => {
            console.log(res.data);
            alert("O orçamento será enviado para seu email no prazo de dois dias úteis")
            setProduto([]);
        })
        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
   }
}
