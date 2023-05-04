import React from "react";
//on va essayer de creer une page avec des componnents dedans
function Book() {
  return (
    <section className="booklist">
      <Boook title="random title" number={22} />
      <Boook job="developer" />

      <Boook />
    </section>
  );
}

//number f prps dima kn7thum bin {}  ama string blach knkhkliwhc rer bin ""
//3tina props l 2 dyl books usf, alorss rdi iban re f duk 2 urdi iban rer hnu 7tina wkha nkunu 3ytnlhum kmlin lt7t

//2 methodes pour definir ces fcs , nous on va utiliser la methode de const
//components in another componnet :
const Boook = (props) => {
  //methode 2
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
    // {RAH wkha n3ytu 3la props kmlin hna. mghybnuch kmlin het 3lhsb fin 7tina values usf }
  );
};
//tjrs on met les images dans public
const Image = () => (
  <img
    src="./images/img.jpg"
    alt="Look for Me There: Grieving My Father, Finding Myself"
  />
);
//ici on utlise java script pour ecrire le tiitre, bch la bghina nbdlu titre nbdluh dghya

//on peut faire la meme chose pour author
const Title = () => {
  const title = " Look for Me There: Grieving My Father, Finding Myself";
  return <h2> {title} </h2>;
};

//  AY HAJA KNBGHIW NKTBUHA B JAVASCRIPT KNRJ3U L {}

//or with return type

//css with jsx
//font-size== fontSize

/* ici on aura un probleme, car quand je vais y aller pou modifier un h4 dans css

  les modificatons comme color par exp vont pas  s effectuer .

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    Jordan Moore
  </h4>
);
*/

//solution :  on cree un objet, on lui donne le css et on l appelle apres

const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};

// PROPS PRINCIPE
/* PROPS PHAL OBJECTS, HUMA DYL REACT, KYMKLULNA NGHYRU VALUES DYL VARIABLES BKUL SUHULA 
EN HAUT KN7TU  PROPS COMME PARAMETRE F FUNCTION LI RTKHDMHA , THEN KN3TEWA VALUES BDEK TRE9A 

*/

export default Book;
