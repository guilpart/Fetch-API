import React, { useState, useRef } from "react";
import { filter, isUndefined, toLower, isEqual, toUpper } from "lodash";
import styled from 'styled-components'
import img from './images/Bitcoin.jpg'
import { Recup } from "./recuperation";

export const Rendu = () => {

    var d = new Date();
    var date = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    // eslint-disable-next-line
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1);
      };
 
    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
    const [err, setErr] = useState();
    const [derivation, setDerivation] = useState();
    const [err2, setErr2] = useState();
    const [dts] = Recup();
    
    Recup()
    console.log(dts);

    const [name, setName] = useState();
    const [output, setOutput] = useState();
    const [unite, setUnite] = useState();

    const onClickButton = () => {
        let trueDevise = []
        let unit = []

        if(!isUndefined(name)) {
            const low = toLower(name)
            const firstUp = uppercaseWords(low)
            const upperName =toUpper(name)
             trueDevise = filter(dts?.rates, f => (f.name === firstUp ))
             unit = filter(dts?.rates, f => (f.unit === upperName ))
             setUnite(unit)
        }

        if (  output === null || output === undefined || isEqual(output,[]) || name === null || name === undefined) { 
            setErr('Devise non disponible');
            setErr2('Entrez une nouvelle pour faire la recherche');
            setDerivation(<a href="exemple.html">exemple ici</a>)
            setErr3("")
            setErr4("")

        }

        setOutput(trueDevise)
    }

    const [err3, setErr3] = useState();
    const [err4, setErr4] = useState();
    const ref = useRef();

    const handleClick = () => {
        ref.current.value = '';
        setName('')
        setOutput([])
        setUnite()
        setErr("")
        setErr2("")
        setDerivation("")
        setErr3('Devise Supprimée');
        setErr4('Entrez une nouvelle pour faire la recherche');
      };
  
const handleKeyPress = (event) => {
    if(event.key === 'Enter')
    {
        onClickButton()
    }
  }
      
return (
    <Body>
        <Affichage>
            <Entree ref={ref} type="text"  placeholder="Entrez une devise" onChange={(e) => setName(e.target.value)} onKeyPress={handleKeyPress} ></Entree>
            <div>
                <Button onClick={onClickButton}>Valider devise </Button>
                <SuppButton onClick={handleClick}>Supprimer devise</SuppButton>
            </div>

            {
             (!isUndefined(output) && !isEqual(output,[])) ? 
                <p>
                    un Bitcoin se vend { output[0].value } {output[0].name } le {date} à {hours}
                </p> :

                    (!isUndefined(unite) && !isEqual(unite,[])) ? 
                <p>
                    un Bitcoin se vend { unite[0].value } {unite[0].name} le {date} à {hours}
                </p> :

                <div> 
                    <div>
                        {err} {derivation}
                    </div>

                    <div>
                        {err2}
                    </div>
                    
                </div>
            }
        <div>
                
        </div>
            {
                (handleClick) &&
                <div>
                    <div>
                        {err3}
                    </div>

                    <div>
                        {err4}
                    </div>
                </div>
            }  
        </Affichage> 
        
        </Body>
    
);
};
  
                                                         // Pour l'arriere plan 
const Body = styled.body`                           
    background-image: url(${img});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-width: 100%;
    min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 97vh;
	flex-direction: column;
    
    
`;


const Affichage = styled.div`
    background-color: white;           
    text-align: center;
    border: 4px solid black;
    border-radius: 20px;
    position: sticky;
    height: 300px;
  
`;
const Entree = styled.input`
    margin: 16% 0 5% 0;
    text-align: center;       
    width: 90%;
    height: 15%;
    
`;

const Button = styled.button`
  color: green;
  height: 60px;
  width: 199px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 2em;
  border: 5px solid lawngreen;
  border-radius: 20px;
  &:hover{cursor: pointer;},
  &:focus {
    opacity: .8;
  }

`;

const SuppButton = styled(Button)`
  color: red;
  border-color: crimson;
  
`;















///////////////////////////////////////////////////////////////////////////////////////////////////////////////                
///////////////////////                                                                     ///////////////////
//////////////////////                                                                     ////////////////////
/////////////////////                                                                     /////////////////////
////////////////////                                                                     //////////////////////
///////////////////                                                                     ///////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////