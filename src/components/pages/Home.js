import { useState } from "react";
import axios from "axios";

export default function AddItem(){

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");


    function insertProduct(e){
        e.preventDefault();
        const URL = "http://localhost:5000/products";

        const body = {
            name: name,
            image: image,
            price: price,
        }
        const promise = axios.post(URL, body);
        promise.then((res) => {
            console.log(res.data);

        })
        promise.catch((err) => {
            console.log(err.response.data)
            alert("Ocorreu um erro, confira os campos e tente novamente!");
        })

    }

    return(
        <div className="container">
            <div className="adicionar">
            <h1>Adicionar ao estoque</h1>
            <form onSubmit={insertProduct}>
            
            <input
              type="text"
              id="nameProduct"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do produto"
              required
              
              />
            <input
              type="text"
              id="imageProduct"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Link da imagem do produto"
              required
              
              />
            <input
              type="number"
              id="priceProduct"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Preço do produto"
              required
              
              />
    
            <button type="submit">
                
               Adicionar produto
              
            </button>
          </form>

              </div>
        </div>
    )
}