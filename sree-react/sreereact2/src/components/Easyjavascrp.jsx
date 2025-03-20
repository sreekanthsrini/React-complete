

export const Easyjavascrp = () => {

  // small task to check loggin message using conditions
  const isloggin=false;
  const greeting= isloggin? <p> welcome to the home page</p>: <p>loggin please</p>

  // create a list and print using return function
  const items=["sree1","sree2","sree3"];
  return (
    

    
      <>
        <div className="esyjs">Easy Javascript</div>
        <h1 className="tag1"> Hi Easy Javascript</h1>
        <p className="pgp">Focus on code</p>
        {/* how expression  work in react */}
        <p> 25+90= {25+90}</p>
        {/* call that function */}
        {greeting}

        {/* <ul>
          {items.map((items,index)=>(
          <li> key={index}>{items}</li>

         ) )}
        </ul> */}


<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

      </>
  
    
  );
    
    
}
