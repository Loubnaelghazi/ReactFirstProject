import React from 'react'; //druuri
import ReactDOM from 'react-dom/client';  //darri
import App from './App';
import Book from './Book'; //import les components ,nb : nom de file doit etre le meme quand on ecrit Name from Name 
 import './index.css'; //import du fichier css

//rootcomponent 

//appel a tous les components qu on va creer et injecter dans le div d id root de notre index html 

//le premier appele le premier qui sera affiche 
//les tags qu on appelle soit single ou double tags comme <hkl></hkl>

//on les appelle par la fonction  root.render 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Book />   
 </React.StrictMode>
);

//on peut appeler n importe quel componnet ici , comme app...

