import React from 'react'
import { useRef } from 'react';
import HeroPageimg from './src/Hero.png'
import './App.css';
import TextUnder from './src/Under.png'
import Logo from './src/Logo.png'


const Desctop = () => {
    const TextStyle = {fontFamily: 'Poppins',fontStyle: 'normal',fontWeight:'900',fontSize:'60px',lineHeight: '90px'}
  const ButtonStyle = {
  width:'535px', 
  height:'85px',
  borderRadius:'43px',
  background: "linear-gradient(90deg, #DC04CB 0%, #00F5FB 100%)",
  boxShadow:" 2px 2px 2px rgba(0, 0, 0, 0.301961)",
  borderRadius: "43px",
  border:'none',
  marginTop:'40px',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '30px',
  lineHeight: '45px',
  color: '#F2F2F2',
  cursor:'pointer'}
  const Modal = useRef(null)
  return (
    <div className="App">
      <header className="App-header">
        <div style={{position:'absolute', width:'100%'}}><img src={Logo} alt="logo" width={250} style={{marginTop:'20px',marginLeft:'40px'}}/></div>
      </header>
      <div className='mainContainer'>
        <div className='leftSide' style={{width:'100%',height:'100vh',margin:'0 auto',padding:'40px'}}>
          <div className='Text' style={{width:'70%',marginLeft:'15%',marginTop:'20%'}}> 
          <h3 style={TextStyle}>Website is</h3> 
          <br/>
          <img src={TextUnder} alt='under' /><br/>
          <h3 style={TextStyle}>Construction</h3>
          <span className='CompanyInfoText'>Some Text About Company Some Text <br/>About Company Some Text About
            Some Text About Company Some Text About Company Some Text<br/>
            Some Text About Company Some Text About Company</span>
            <br/>
            <button style={ButtonStyle} onClick={()=>{Modal.current.classList.toggle('Disable')}} className="button">Leave Your Contact Information</button>
          </div>
        </div>
        <div className='rightSide'style={{width:'45%',height:'100vh',backgroundColor:'#D9D9D9',position:'relative'}}>
          <div><img src={HeroPageimg} alt='Heroimg' width="900px"  style={{position:'absolute',bottom:'0px',left:'-320px'}}/></div>
        </div>
      </div>
      <div className='Contact Disable' ref={Modal}>
        <div className='ContactContainer'>
        <div className='ContactLeft' style={{textAlign:'center'}}>
        <h3 
        style={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight:'500',
          fontSize: '20px',
          lineHeight: '30px',marginTop:'80px'}}>Leave Your Contact Information</h3>
        <div className='inputContainer'>
        <input type='text' placeholder="Enter Your E-mail Address" className='input'/>
        <input type='text'placeholder="Enter Your Phone Number" className='input'/>
        <input type='text'placeholder="Enter Your LinkedIn URL" className='input'/>
        <button className='EmailSandBTN'>Send</button>
        </div>
        </div>
        <div className='Contactright' style={{position:'relative'}}><button  className="ModalCloseBTN"onClick={()=>{Modal.current.classList.toggle('Disable')}} >X</button></div>
        
        </div>
      </div>
    </div>
  );
}

export default Desctop
