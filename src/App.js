import './App.css';
import { Answers } from './components/Answers';
import {useEffect, useState} from 'react';


function App() {
  var randomNumber1 = Math.ceil(Math.random()*385);
  var [apiData1, setApiData1] = useState();
  const fetchApi1 = async () =>{
    var res = await fetch( `https://pokeapi.co/api/v2/pokemon/${randomNumber1}`);
    var json = await res.json();
    setApiData1(json);
  };
  useEffect(()=>{
    fetchApi1();
  }, []);

  var randomNumber2 = Math.ceil(Math.random()*385);
  var [apiData2, setApiData2] = useState();
  const fetchApi2 = async () =>{
    var res2 = await fetch( `https://pokeapi.co/api/v2/pokemon/${randomNumber2}`);
    var json2 = await res2.json();
    setApiData2(json2);
  };
  useEffect(()=>{
    fetchApi2();
  }, []);

  var randomNumber3 = Math.ceil(Math.random()*385);
  var [apiData3, setApiData3] = useState();
  const fetchApi3 = async () =>{
    var res3 = await fetch( `https://pokeapi.co/api/v2/pokemon/${randomNumber3}`);
    var json3 = await res3.json();
    setApiData3(json3);
  };
  useEffect(()=>{
    fetchApi3();
  }, []);

  var randomNumber4 = Math.ceil(Math.random()*385);
  var [apiData4, setApiData4] = useState();
  const fetchApi4 = async () =>{
    var res4 = await fetch( `https://pokeapi.co/api/v2/pokemon/${randomNumber4}`);
    var json4 = await res4.json();
    setApiData4(json4);
  };
  useEffect(()=>{
    fetchApi4();
  }, []);

  const op1 = !apiData1 ? '-': [apiData1.sprites.other.home.front_default, apiData1.species.name];
  const op2 = !apiData2 ? '-': [apiData2.sprites.other.home.front_default, apiData2.species.name];
  const op3 = !apiData3 ? '-': [apiData3.sprites.other.home.front_default, apiData3.species.name];
  const op4 = !apiData4 ? '-': [apiData4.sprites.other.home.front_default, apiData4.species.name];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Poke-Quiz</h1>
        <h4>By Jorge Tovar </h4>
        <h5><a href='https://github.com/J-ATJ'>J-ATJ</a></h5>
      </header>
      <main>
        <div className="indicators-ctn">
        </div>
        <div className="question-ctn">
          Who's that pokemon?
        </div>
          <Answers 
            op1={op1}
            op2={op2}
            op3={op3}
            op4={op4}
          />
      </main>
    </div>
  );
}

export default App;