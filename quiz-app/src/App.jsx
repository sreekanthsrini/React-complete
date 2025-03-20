// import { useEffect, useState } from 'react'
// import questionData from "./questions.json";

// import './App.css'

// function App() {

//   const[currentQuestion,setCurrentQuestion]=useState(0);
//   const[score ,setScore]=useState(0);
//   // after complete the quiz to manage
//   const[showscore,setShowScore]=useState(false);
//   // to manage quiz timing
//   const[timer,setTimer]=useState(10);

//   useEffect(()=>{
//     let interval;
//     if(timer>0&& !showscore){
//       interval=setInterval(()=>{
//         setTimer((prevTimer)=>prevTimer-1);

//       },1000)
//     }else{
//       clearInterval(interval);
//       setShowScore(true);
//     }
//     return()=>clearInterval(interval);

//   },[timer,showscore]);

//   const handleAnswerClick=(selectedOption)=>{
//     if(selectedOption==questionData.questions[currentQuestion].options){
//       setScore((prevscore)=>prevscore+1);
//     }
//     if(currentQuestion<questionData.questions.length-1){
//       setCurrentQuestion((prevQuestion)=>prevQuestion+1);
//       setTimer(10);
//     }
//     else{
//       setShowScore(true)
//     }
//   };
//   const handleRestart=()=>{
//     setCurrentQuestion(0);
//     setScore(0)
//     setTimer(10);
//     setShowScore(false); 
//   };

//   return (
//     <>
//     <div className="quiz-app">
//       {showscore ?(
//         <div className="score-section">
//         <h2>Your Score:{score}/{questionData.questions.length}</h2>
//         <button onClick={handleRestart}>Restart</button>
//       </div>

//       ):(
//         <div className="question-section">
//         <h2> Question {currentQuestion+1}</h2>
//         <p>{questionData.questions[currentQuestion].question}</p>
//         <div className="options">
//           {questionData.questions[currentQuestion].options.map((options,index)=>(<button key={index} onClick={()=>handleAnswerClick(options)}>{options}</button>))}


//         </div>
          
//           <div className="timer">
//             Time left: <span>{timer}</span>
//           </div>
        
//       </div>
        
//       )}
      
   
      

//     </div>
      
//     </>
//   )
// }

// export default App



import { useEffect, useState } from 'react';
import questionData from "./questions.json";
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      if (timer === 0) {
        setShowScore(true);
      }
    }
    return () => clearInterval(interval);
  }, [timer, showScore]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questionData.questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < questionData.questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(10);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimer(10);
    setShowScore(false);
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}/{questionData.questions.length}</h2>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questionData.questions[currentQuestion].question}</p>
          <div className="options">
            {questionData.questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>{option}</button>
            ))}
          </div>
          <div className="timer">
            Time left: <span>{timer}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
