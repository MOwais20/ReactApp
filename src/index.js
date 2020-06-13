import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Room from "./Room";


const Author = ({ name }) => (
  <div className="author">
    <em>
      Coded by: <a href="https://github.com/MOwais20" target="_blank"><strong>{name}</strong></a>
    </em>
  </div>
);

// const Gate = ({ isOpen }) => {
//   return (
//     <div>
//       <strong>Gate:</strong> <em>{isOpen === true ? "open" : "close"}</em>
//     </div>
//   );
// };

// function MediaCard(props) {
//   return (
//     <div className="mediaCard">
//       <h2>{props.title}</h2>
//       <img src={props.image} alt="ilustratedGraphic" />
//       <p>
//         <em>
//           <strong>{props.body}</strong>
//         </em>
//       </p>
//     </div>
//   );
// }


const Print = () => {
  return (
    <div className="mediaCard">
      {/* <MediaCard
        title="Illustration"
        body="'An ilustrated Picture of a woman'"
        image="https://images.unsplash.com/photo-1588612568467-a6b245a1f4a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
      />
      <Gate isOpen={true} /> */}
      <Room/>
      <Author name="MOwais" />
    </div>
  );
};



ReactDOM.render(<Print />, document.querySelector("#root"));
