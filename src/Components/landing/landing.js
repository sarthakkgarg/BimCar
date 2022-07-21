import React, {  } from 'react';
import Header from '../header/header';
import Drawer from '../drawer/drawer';
import CardComponent from '../card/card';
export default function landing()   {
  
    return (
        
    <>
    <Header/>
    <Drawer/>

    <div className='main-container'>
    <CardComponent/>
    </div>

    </>
    )
  
}
