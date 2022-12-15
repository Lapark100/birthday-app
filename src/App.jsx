import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
    const [people, setPeople] = useState(data)
    const [buttonText, setButtonText] = useState("clear all");

    function handleChange(){
       if( buttonText === "clear all" ) {
        setButtonText("View all");
        setPeople([]);
       } else if ( buttonText === "View all") {
        setButtonText('clear all');
        setPeople(data);
    }
       }
       

   

  return <main>
  <section className='container'>
    <h3>{data.length} birthdays today</h3>
    <List people={people} />
   <button onClick={handleChange}>
    {buttonText}
    </button>
  </section>
</main>
}

export default App;
