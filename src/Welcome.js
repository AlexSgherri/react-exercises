import React from "react";
import { Age } from "./Age";


export function Welcome ({ name = 'Vittorio' }){
    return (
        <div className="welcome">
            <p>Welcome, {name}</p>
            <Age age={17} />
        </div>
    )
}

// export class Welcome extends React.Component{

//     render(){
//         return (
//             <div className="welcome">
//                 <p>Welcome, {this.props.name}</p>
//                 { this.props.name === "John" && <Age age={17} /> }
//             </div>
//         )
//     }
// }

// Welcome.defaultProps = {
//     name : "Alessandro",
// }
