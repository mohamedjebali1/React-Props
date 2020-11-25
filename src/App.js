import React from 'react';

import Profile from './profile/Profile'

import './App.css';
import './style.css'

let person = [
  {name : "Mohamed Jebali", bio : "Né en 15/06/1988 à Menzel tmim  de nationalité Tunisienne", profession: "Développeur Informatique"}
];
function App() {

  const personItem = person.map(el => <Profile name={el.name} bio={el.bio} profession = {el.profession} />)

  return (
    <div className="ProfileItem">
      <img style = {{width : '200px', textAlign: 'center', padding : '30px'}} src = './profile.jpg' alt = 'profile'/> 
      {personItem}
    </div>
  );
}

export default App;
