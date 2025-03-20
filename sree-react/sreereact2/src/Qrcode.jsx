// import { useState } from "react";

  

// export const Qrcode = () => {
//     // it is the functionality in build in react
//     // useState
//     // create one temp variable
//     // here the img is the user define variable
//     // set image is the function
//     // const is the key word
//     const [img,setImg]=useState("images/pic2.jpg")
//     const[appy,setappy]=useState("images/pic2.jpg")
//     // create a variable for handle paragraph tag
//     const[loading,setloading]=useState(false)
//     // create two function
//     // the async function is used to change the already predefined function
//      async function generatorQR(){
//         setloading(true);
//         try{
//             const url=""
//             setImg(url);
//         }
//             catch(error){
//                 console.error("Error generating Qr code",error);

//             }
//             finally{
//                 setloading(false)
//             }
//         }
//      }
        
//     function downloadQR(){
        

//     }

//   return (
    
    
//     <div className="app-container">
//         <h1>QR CODE GENERATOR</h1>
//         {/* <img src={img} alt="" className="qr-code-image" /> */}
//         {/* use conditional rendering for display of image
//          */}
//          {loading&&<p> please wait...</p>}
//          {img && <img src={img} className="qr-code-image"/>}
//         <div>
//             <label htmlFor="dataInput" className="input-label">
//                 Data for Qr code
//             </label>
//             <input type="text" id="dataInput" placeholder="Enter data for Qr code" />
//             <label htmlFor="sizeInput" className="input-label">
//                 Image size (e.g,150)
//             </label>
//             <input type="text" id="sizeInput" placeholder="Enter the image size" />
//             {/* eventr handling in react using onClick function */}
//             <button className="generate-button" onClick={generatorQR}> Generate Qr Code </button>
//             <button className="download-button">Download Qr code</button>

//         </div>
//     </div>
//   );






import { useState } from "react";

export const Qrcode = () => {
  // initial state before the action
  const [img, setImg] = useState(" ");
  // 
  const [appy, setAppy] = useState("images/pic2.jpg");

  // due to waiting time to generate we can create this 
  // this loading can be handle using conditional rendering
  const [loading, setLoading] = useState(false);
//   to get the input as data
// const [qrdata,setQrdata]=useState("joes");
const [qrdata,setQrdata]=useState("https://www.youtube.com/");
// to get the input S SIZE WE ARE CREATING THE VARIABLE
const [qrsize,setqrsize]=useState("150")


// the async function is used because  it will take load to timme to manage that we can use async function
  async function generatorQR() {
    // to check the loding state using true or false(boolean)
    setLoading(true);
    try {
    //   const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrdata}`; // Set this to the generated QR code URL
    // want to encrypt the data link  beause it has many symbols bslash etc
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`; // Set this to the generated QR code URL
      setImg(url);
    } catch (error) {
      console.error("Error generating Qr code", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQR() {
    // Check if 'img' exists before trying to fetch it
    if (!img) {
      console.error("No image available to download.");
      return;
    }
  
    fetch(img)
    // blob is the function it is defined as binary lagre object
      .then((response) => response.blob()) // Fixed arrow function syntax
      .then((blob) => { // Fixed arrow function syntax
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob); // Fixed typo in URL.createObjectURL
        link.download = "qr.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading QR code:", error));
  }
  
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} className="qr-code-image" alt="Generated QR Code" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code
        </label>
        {/* here is the function to change the value and what value is type here it is  shown in  textbox of the given function */}
        <input type="text" id="dataInput" placeholder="Enter data for QR code" value={qrdata} onChange={(e) => setQrdata(e.target.value)} />
        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150)
        </label>
        <input type="text" id="sizeInput" placeholder="Enter the image size" value={qrsize} onChange={(e)=>setqrsize(e.target.value)} />
        <button className="generate-button" onClick={generatorQR} disabled={loading}>
          Generate QR Code
        </button>
        <button className="download-button" onClick={downloadQR}>
          Download QR Code
        </button>
      </div>
    </div>
  );
};


