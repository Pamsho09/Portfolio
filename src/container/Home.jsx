import React from 'react'
import logo from '../assets/img/logo.png'
import face from '../assets/img/face.png'
import styled from  'styled-components'
function Home() {

    const Page=styled.div`
    width: 100%;
height: 100vh;
align-items:center;
    display:flex;
flex-direction: column;
justify-content:space-between;
.logo{
    width:80%;
}
.face{

    width:100%;
}
h2{
    width: 70%;
    text-align:center;
height: 105px;
    font-family: 'Roboto', sans-serif;
}




    `
    return (
        <Page>
            <img className="logo" src={logo} alt="logo"/>

            <h2 classname="subTitle">
            Desarrollador frontend y algo más.
            </h2>
            <img className='face'src={face} alt='face'/>
        </Page>
    )
}

export default Home
