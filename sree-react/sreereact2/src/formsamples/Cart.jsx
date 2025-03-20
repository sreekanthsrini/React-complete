import {useState} from 'react';

export const Cart = () => {
    const[cartCount,setcartCount]=useState(0);
    const handleclick=() => setcartCount(cartCount+1)


    const[here,sethere]=useState(0);
    const clickpanu=()=>sethere(here+1);




    const [username,setusername]=useState("sree");
    const changenm=()=>setusername("sreekanthsrinivasan");

    const chng=()=>setusername("sreekanth change name")



    // it is for form tag
    const[man,setman]=useState({names:"tom",ages:19});





    // we can also use terinary operato\r for this
    // to change the name
    // username=="tram"?setusername("sam"):setusername("ram");
    const[userage,setuseerage]=useState(20);
    // const changeage=()=>setuseerage(19);
    const changeage=()=>{
        // conditional  operator
        userage==20? setuseerage(25):setuseerage(20);
    }
    // function of form tag

    // it all action can be return using single function
    function quickconvertname(e){
        // create a var to store and get value temp
        // usnig spread operation here (...)

        const newstateobj={...man};
        newstateobj.names=e.target.value;
        setman(newstateobj);
        
    }
    function quickconvertage(e){
        // the spread operator is used to dispaly the old state in the display or page so we are using spread operator
        const newstate={...man};
        newstate.ages=e.target.value;
        setman(newstate);
    }




  return ( <>
  <h1>
    Number of fruits in basket {cartCount}</h1>
    <button onClick={handleclick}>Add</button>


    <h1> no of items in cart :{here}</h1>
    <button onClick={clickpanu}>click</button>
    <br />
    <br />
    <h1>USER DETAILS</h1>
    <h2>My name is:{username}</h2>
    <h2>My age is:{userage}</h2>
    <button onClick={changenm}>change name</button>
    <button onClick={chng}> changepannuga</button>
    <br />
    <hr />
    <button onClick={changeage}>change age</button>
    {/* used to convert that what we are texting inside the box */}
    <form action="">
        <input type="text" placeholder='enter the name' onChange={quickconvertname} />
        <input type="number" placeholder='enter the age' onChange={quickconvertage} />
        <h2>
            {man.names},{man.ages}
        </h2>

    </form>


    </>
    
  )
}


// Some common React Hooks include: 
// useState() 
// useReducer() 
// useEffect() 
// useLayoutEffect() 
// useCallback() 
// useMemo() 
// React Hooks are functions that allow developers to use React features and state without writing a class component: 