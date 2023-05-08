import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import { useState } from "react"
//
import Alface from "./images/alface.png"
import Beterraba from "./images/beterraba.png"
import Cenoura from "./images/cenoura.png"
import Cereja from "./images/cereja.png"
import Laranja from "./images/laranja.png"
import Limao from "./images/limao.png"
import Manga from "./images/manga.png"
import Tomate from "./images/tomate.png"
import Cart from "./images/ShoppingCart.png"


function App() {

  const [fruta, setFruta] = useState([
    Alface,
    Laranja,
    Cereja,
    Cenoura,
    Manga,
    Limao,
    Beterraba,
    Tomate
  ])

  const Corpo = styled.div`
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
    h1{
    font-size: 3em;
    margin: 0;


    }
    h2{
      font-size:2em;
      margin: 0;
    }
  `
  
  const Principal = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5em
  `
  const Frutas = styled.section`
  display: flex;
  gap:3em;
  width: 50vw;
  justify-content:center;
  flex-wrap: wrap;
    h3{
      color: white;
      width: 100%;
      font-size: 2.5em;
    }
  `
  const Img = styled.img`
  width: 8vw;

`
  const Carrinho = styled.section`
  width: 25vw;
  height: 75vh;
  background-color: #F7E0CE;
  display: flex;
  
  gap: 3em;
  border-radius:80px;

  flex-direction: column;
  align-items: center;  
  
  justify-content: center;
    div{
      display:flex;
      justify-content: space-between;
      width: 50%;
      border-radius: 20px;
      height: 5vh;
      background-color: #D3C5BB ;
      padding:0 1em;
      align-items: center;
      span{
        border: 2px solid black;
        width:1.2vw;
        color: black;

        border-radius: 50px;
      }
    }
`
  const Centro = styled.section`
display: flex;
align-items: center;
background-color: #D3C5BB ;
width: 60%;
flex-direction: column;
color: black;
height: 45%;
border-radius:30px;
justify-content: center;
    p{
      width: 70%;
    }
`
  const Imagem = styled.img`
width: 35%;
`
  return (
    <Corpo>
      <h1>HORTIFRUTI</h1>
      <h2>VnW</h2>
      <Principal>
        <Frutas>
          <h3>NOSSOS PRODUTOS</h3>
          {fruta.map((item) => (
            <Img src={item} alt="" />
          ))}
        </Frutas>
        <Carrinho>
          <Centro>
            <Imagem src={Cart}></Imagem>
            <p>Arraste o seu produto aqui para colocar no carrinho</p>
          </Centro>
          <div><span>+</span> <span>-</span></div>

        </Carrinho>
      </Principal>
    </Corpo>
  );
}

export default App;
