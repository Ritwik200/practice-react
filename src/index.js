// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My fav foods</h1>
    <ul>
      <li>Beacon</li>
      <li>Noodles</li>
      <li>Jamon</li>
    </ul>
  </div>,
  document.getElementById("root")
);
