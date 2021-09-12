//============================ Practice code =====================//

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "jagdish";
// const lname = "dusane";

// let currDate = new Date().toLocaleDateString();
// let currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Chitorgard fort</h1>
//     <h2>list of 5 best series</h2>

//     <ol>
//       <li>netflix</li>
//       <li>netflix</li>
//       <li>netflix</li>
//       <li>netflix</li>
//     </ol>

//     {/* Expression */}

//     <h1>My name is {fname}</h1>
//     <p>Addition is {5 + 6}</p>

//     {/* Templet literals */}

//     <h2>{`my full name is ${fname} ${lname}`}</h2>

//     {/*Challenge no 2 */}

//     <h1>Date and Time display</h1>
//     <h3>{`Todays date is ${currDate}`}</h3>
//     <h3>{`current time is ${currTime}`}</h3>
//   </React.Fragment>

//   document.getElementById("root")
// );

//======================== React gallary =========================//

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// let name = "jagdish";
// let img1 = "https://picsum.photos/300/300";
// let img2 = "https://picsum.photos/400/400";
// let img3 = "https://picsum.photos/500/400";
// let img4 = "https://picsum.photos/200/200";
// let link = "https://www.freecodecamp.org/learn/";

// ReactDOM.render(
//   <React.Fragment>
//     <h1 className="title">my name is {name}</h1>
//     <div className="gallery">
//       <a href={link} target="_blank" rel="noreferrer">
//         <img src={img2} alt="lorem images" />
//       </a>

//       <img src={img3} alt="lorem images" />
//       <img src={img1} alt="lorem images" />
//       <img src={img4} alt="lorem images" />
//     </div>
//   </React.Fragment>,
//   document.getElementById("root")
// );

//====================== inline css Using opject=====================//

// import React from "react";
// import ReactDom from "react-dom";

// const heading = {
//   textTransform: "uppercase",
//   color: "green"
// };

// ReactDom.render(
//   <React.Fragment>
//     <h1 style={heading}>hello jagdish</h1>
//   </React.Fragment>,
//   document.getElementById("root")
// );

//==================== Apply Inline css between ============//

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.Fragment>
//     <h1 style={{ textAlign: "center", color: "red" }}>Hi This is Jagdish</h1>
//   </React.Fragment>,
//   document.getElementById("root")
// );

//==================== Ract challenge =============//

// import React from "react";
// import ReactDOM from "react-dom";
// import "./challeng.css";

// let currTime = new Date().getHours();
// let message = " ";
// let style = {};

// if (currTime >= 1 && currTime <= 11) {
//   message = "Good Morning";
//   style.color = "red";
// } else if (currTime >= 12 && currTime <= 19) {
//   message = "Good Afternoon";
//   style.color = "green";
// } else {
//   message = "Good Night";
//   style.color = "#0c95f3";
// }

// ReactDOM.render(
//   <React.Fragment>
//     <div className="section-1">
//       <h1>
//         Hello Sir,<span style={style}>{message}</span>{" "}
//       </h1>
//     </div>
//   </React.Fragment>,

//   document.getElementById("root")
// );

//====================== React Componant =====================//

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.Fragment>
//     <App />
//   </React.Fragment>,
//   document.getElementById("root")
// );

//===================== React componant task ====================//

/* import React from "react";
import ReactDOM from "react-dom";
import ChangeText from "./ChangeText";

ReactDOM.render(
  <React.Fragment></React.Fragment>,
  document.getElementById("root")
); */

//================ React Calculator ===============//

/* import React from "react";
import ReactDOM from "react-dom";
import CalFun from "./CalFun";

ReactDOM.render(
  <React.Fragment>
    <CalFun />
  </React.Fragment>,
  document.getElementById("root")
);
 */

//==================== Cards ==================//

// import React from "react";
// import ReactDOM from "react-dom";
// import "./cards.css";
// import App from "./App";

// function nCards(val) {
//   return (
//     <CardData
//       imgscr={val.imgscr}
//       title={val.title}
//       name={val.name}
//       link={val.link}
//     />
//   );
// }

// ReactDOM.render(
//   <React.Fragment>
//     <App />
//     <h1>🎰This is slot machine</h1>
//   </React.Fragment>,
//   document.getElementById("root")
// );

//====================Slot machine game ============//

/* import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./slot.css";
import SlotM from "./SlotM";

ReactDOM.render(
  <React.Fragment>
    <App />
    <SlotM a="😆" b="😄" c="😃" />
    <SlotM a="😺" b="😺" c="😺" />
    <SlotM a="🍍" b="🍎" c="🍌" />
  </React.Fragment>,
  document.getElementById("root")
);
 */

//================== React hooks =========

/* import React from "react";
import reactDom from "react-dom";
import App from "./App";

reactDom.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
 */

//===========Expens Items=========
import React from "react";
import reactDom from "react-dom";
import App from "./App";

reactDom.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
