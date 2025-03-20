
import './Sree.css';
export const Sree = () => {
    const workhardandbesmart = true;

    const message= workhardandbesmart ? <p> you can success</p>: <p> not success</p>;
    // CONTAIN A LIST OF ITEM
    const items=["sree","renu","srini","swetha"];
  return (
    // this empty tag is called fragments
    // this fragment is used for  bucause we cannot handle multiple elements i react so this fragment is consider as a single element 
   <>
  
    <h1 className="head1">
        hello welcome

    </h1>
    <h2>
        continue your work  stay positive focus on code
    </h2>


    <h1>
        25+49={25+49}
    </h1>

    {/* working of conditional rendering */}
    {/* it means.  conditional statements in other language */}
    {message}

    {/* how to handle a list for web page */}


    <ul>
        {items.map((items,index) => (
            <li key={index}> {items}</li>
        ))}
    </ul>









    </>
    
   
  )
}
