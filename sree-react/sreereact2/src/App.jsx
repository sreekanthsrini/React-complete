 import { Header } from "./components/Header";
 import { LearnComponent } from "./components/learncomponent";
 import{Easyjavascrp} from"./components/Easyjavascrp";
//  import{Members} from"./components/Members";
 import{ChildComponent} from"./components/ChildComponent";
 import { ArrayProp } from "./components/ArrayProp";  
import { Student } from "./components/student";


function App() {
  // create a array
  const items=[{id:2,name:"sreekanth"},
    {id:1,name:"john"},{ id:3,name:"susan"}
  ]



  return (  
  

    // the div is used to return ythe statement one tag contain only one component
    // if we use div it. makes extra structure
    // so we can   use fragment instead of div
    // <div className="overall"> 
    // <div>SREEKANTH OCT2 </div>
    // <LearnComponent/>
    //   <br />
    // <div>SREE 2ND FUNCTION CALL</div>
    // <Header/>
    // <Easyjavascrp/>
    // </div>
    <>

    {/* <Members name="sreekanth" age={35} isMarried={true} />
    <Members name="sreyasreekanth" age={35} isMarried={true} /> */}

    {/* we have the default properties */}
    {/* it will use as iif we not pass any one argument it will conisider the default value */}
    {/* <Members age={98} /> */}
    {/* child component */}
    <ChildComponent>
      <p>
        this is para 1
      </p>
      <p>
        this is para 2
      </p>

      <p>
        this is para 3
      </p>
    </ChildComponent>



    {/* <ArrayProp items={items} /> */}


   <Student name="sreekanth" age={90} isMarrid={true}/>

   <Student name="sreyasreekanth" age={90} isMarrid={true}/>






    </>
    


  );

  

    
    
  // how to call multiple functions in same component
}


  
export default App;
