// import { useState } from 'react'

// import './App.css'

// function App() {
//   const[show,setShow]=useState(true)
//   const toggleShow=()=>{
//     setShow(!show);
//   }

//   const FaqItem=({question,answer})=>{
//     return(

//       // active is the state it is manage by css
//       <div className={`faq-item ${show?"active":""}`}>
//         <div className="faq-item-header" onClick={toggleShow}>{question}</div>
//         <div className="faq-item-body">
//           <div className="faq-item-body-content">
//            {answer}
//           </div>
//         </div>
//       </div>
//     )

//   };

//   const FaqAccordian=(data)=>{
//     return (
//       <div className="faq-accordian">
//         <h2>FAQ's</h2>
//       {data.map(item => (<FaqItem key={item.id} question={item.question} answer={item.answer} />))}
//       </div>


//     );
    

//   };
//   const data=[
//     {
//     id:1,questions:"What is react",answer:"React is a front-end -javascript-framework"
//     },
//     {id:2,question:"what are the benefits of react?",answer:"scalability and flexibility is the benefits of framework"},
//     {id3:3,question:"what are the main component of react ?",answer:"components,props,state,hooks,lifecycle,and jsx"},

//   ];

  
 

//   return (
//     <>
//     <div className="App">
//       <FaqAccordian data={data}/>
//     </div>
  
  
    
  
      
//     </>
//   )
// }

// export default App












// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [show, setShow] = useState(false);
//   const toggleShow = () => {
//     setShow(!show);
//   };

//   const FaqItem = ({ question, answer }) => {
//     return (
//       <div className={`faq-item ${show ? "active" : ""}`}>
//         <div className="faq-item-header" onClick={toggleShow}>{question}</div>
//         <div className="faq-item-body">
//           <div className="faq-item-body-content">
//             {answer}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const FaqAccordian = ({ data }) => {
//     return (
//       <div className="faq-accordian">
//         <h2>FAQ's</h2>
//         {data.map(item => (
//           <FaqItem key={item.id} question={item.question} answer={item.answer} />
//         ))}
//       </div>
//     );
//   };

//   const data = [
//     { id: 1, question: "What is react", answer: "React is a front-end JavaScript framework" },
//     { id: 2, question: "What are the benefits of react?", answer: "Scalability and flexibility are benefits of React" },
//     { id: 3, question: "What are the main components of react?", answer: "components, props, state, hooks, lifecycle, and JSX" },
//   ];

//   return (
//     <div className="App">
//       <FaqAccordian data={data} />
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const FaqItem = ({ id, question, answer, isActive, onToggle }) => {
    return (
      <div className={`faq-item ${isActive ? "active" : ""}`}>
        <div className="faq-item-header" onClick={() => onToggle(id)}>{question}</div>
        {isActive && (
          <div className="faq-item-body">
            <div className="faq-item-body-content">
              {answer}
            </div>
          </div>
        )}
      </div>
    );
  };

  const FaqAccordian = ({ data }) => {
    return (
      <div className="faq-accordian">
        <h2>FAQ's</h2>
        {data.map(item => (
          <FaqItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === item.id}
            onToggle={setActiveIndex}
          />
        ))}
      </div>
    );
  };

  const data = [
    { id: 1, question: "What is react?", answer: "React is a front-end JavaScript framework." },
    { id: 2, question: "What are the benefits of react?", answer: "Scalability and flexibility are benefits of React." },
    { id: 3, question: "What are the main components of react?", answer: "Components, props, state, hooks, lifecycle, and JSX." }
  ];

  return (
    <div className="App">
      <FaqAccordian data={data} />
    </div>
  );
}

export default App;
