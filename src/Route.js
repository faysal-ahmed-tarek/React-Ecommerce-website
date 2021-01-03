import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header Section/Header';
import First_section from './Component/Shop body/Shop';
import {Switch,Route} from "react-router-dom";

export default function App(){
  return(
    <>
    <Header />

    <Switch>
      <Route exact path="/" component={First_section}/>
      <Route component={First_section}/>

    </Switch>
    </>
  )
} 