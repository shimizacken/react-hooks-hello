import React, { Component, useState } from 'react';

const Counter = _ => {

    const [count, setCount] = useState(0);

    const updateCounter = () => {
    
        setCount(count + 1);
    }

    return (
        <div>
            <button
                onClick={() => updateCounter()}
            >
                Click me!
            </button>
            <div>
                <span>
                    {count}
                </span>
            </div>
        </div>
    );
};

// class Counter extends Component {

//     state = {
//         count: 0
//     }

//     updateCounter = () => {
    
//         this.setState({
//             count: this.state.count + 1
//         });
//     }

//     render() {

//         return(
//             <div>
//                 <button
//                     onClick={() => this.updateCounter()}
//                 >
//                     Click me!
//                 </button>
//                 <div>
//                     <span>
//                         {this.state.count}
//                     </span>
//                 </div>
//             </div>
//         )
//     }
// }

export default Counter;