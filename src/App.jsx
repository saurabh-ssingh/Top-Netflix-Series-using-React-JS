import React from 'react';

import Cards from "./Cards";
import Sdata from "./Sdata";


const App = ()=>(
<>
  <h1 className="heading_style">List of SIX TOP netfilx Series</h1>
  
  {Sdata.map((val)=>{
    return(
      <Cards
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.links}
      />
    );
  })}
</>
);

export default App;

  