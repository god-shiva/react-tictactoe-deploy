import React from "react";
import "./Square.css";

// const Square = ({onClick, value}) => {
//   return(
//     <button className="square" 
//     onClick={onClick}> 
//       {value}
//     </button>
//   )
// }

// export default Square;



// export default class Square extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     }
//   }
//   render(){
//     return (
//       <button className="square" onClick={() => { this.setState({ value: 'X'}) }}>
//         {this.state.value}
//       </button>
//     )
//   }
// }
const Square = ({ onClick, value}) => {
  return (
          <button className="square" 
            onClick={onClick}>
            {value}
          </button>

  )
}

export default Square;