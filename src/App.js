import "./App.css"
import React, { useEffect, useState } from 'react';

function App(){
  const[li1, setLi1]=useState('');
  const[li2, setLi2]=useState('');
  const[li3, setLi3]=useState('');
  const[bl1, setBl1]=useState('');
  const[bl2, setBl2]=useState('');
  const[bl3, setBl3]=useState('');
  const[li1Text, setLi1Text]=useState('');
  const[li2Text, setLi2Text]=useState('');
  const[li3Text, setLi3Text]=useState('');
  const[img1, setImg1]=useState('');
  const[img2, setImg2]=useState('');
  const[img3, setImg3]=useState('');
 useEffect(() => {
  setLi1("li_1")
    setLi2("li_2")
    setLi3("li_3")
    setBl1("block1")
    setBl2("block2")
    setBl3("block3")
    setLi1Text('ТЕКСТ#1')
    setLi2Text('ТЕКСТ#2')
    setLi3Text('ТЕКСТ#3')
    setImg1('https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg')
    setImg2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQPIV46vn1cSNO5_vkg6zQv0Z3ZSHkPvwK6z3XEjL4EOxEgwlujIe9Mh21xHPOIugNpc&usqp=CAU")
    setImg3("https://bipbap.ru/wp-content/uploads/2021/04/krutye-kartinki-dlya-vk-5-650x488-1.jpg")
}, [])

  return (
    
    <div className="app">
      <div className="wrapper">
      <div className="top"><h1 ></h1></div>
      <div className="bot">
      <div className="left" >
      <ol>
        <li className={li1}>{li1Text}</li>
        <li className={li2}>{li2Text}</li>
        <li className={li3}>{li3Text}</li>
      </ol>
      </div>
      <div className="right">

        <img className={bl1} src={img1}></img>
        <img className={bl2} src={img2}></img>
        <img className={bl3} src={img3}></img>
      </div>
         </div>
         </div>
    </div >
  );
}

export default App;
