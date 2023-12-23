import React, { useEffect, useState } from 'react'

function  Random_color() {

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomColorUtility = (length) => {
    return Math.floor(Math.random()*length);
  }

  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }
  const handleCreateRandomRbgColor = () => {
    const r = randomColorUtility(256);
    const b = randomColorUtility(256);
    const g = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if(typeOfColor === 'rgb'){
      handleCreateRandomRbgColor();
    }else{
      handleCreateRandomHexColor()
    }
  }, [typeOfColor]);

  const myStyle = {
    width : '98.8vw',
    height : '100vh',
    background : color,
  }
  return (
    <div className='container' style={myStyle}>
      <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRbgColor}>Generate Random Color</button>
      <div style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        color : 'white',
        fontSize : '60px',
        marginTop : '50px',
        flexDirection : 'column',
        gap : '20px'
      }}>
        <h3>{typeOfColor === 'hex' ? "HEX Color" : "RBG Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default  Random_color;
