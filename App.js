import React from 'react';
 
/// componnent pour expliquer le fonctionnement des components dans react 



function App() {
    return (
      <>
        
        <h2>My First Component</h2>  
      </>
    );
  }
//attention, pour les single tags comme input. img... on doi tjrs ecrire return <img/> avec le anti slash, sinon error  


//function ne reourne que seule valeur, plutot dib ou section....

//ou on peut regrouper tout dans le tag <React.Fragment>     </React.Fragment> 

//donc on aura type de returnn dans ce react fragment or dans div or ce qu on veut coder 

//ou bien tout simplement <> </> 
//en haut c eatait la peine de le mettre puisqu on a un seul elemetn qui est le h2 


  export default App; //export pour qu on puisse l importer dans le root component 


  //note tap rfc and the componenet will be created beacause of react extension 