import React from 'react';


import './App.css';

import PiggyBank from './PiggyBank';

function App() {

  const myTitle = "Pawel's Piggy Bank"


  return (
    <>

    <PiggyBank title = {myTitle} amount = {10}/>

    </>
  );
}

export default App;
