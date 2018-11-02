import React, { Component, useState, useEffect } from 'react';

const Counter = _ => {

    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(null);
    const [fullusername, setFullusername] = useState('');

    const updateCounter = () => {
    
        setCount(count + 1);
    }

    //document.title = `Clicker!`;

    useEffect(async () => {

        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        const [p] = data.results;

        setPerson(p);
        setFullusername(`${p.name.title} ${p.name.first} ${p.name.last}`);

        document.title = fullusername;
    }, []);

    return (
        <div>
            <button
                onClick={() => updateCounter()}
            >
                You clicked {count}!
            </button>
            <div>
                <div
                    style={{
                        textTransform: 'capitalize'
                    }}
                >
                    {fullusername}
                </div>
                <div
                    style={{
                        textTransform: 'capitalize'
                    }}
                >
                    {person && `${person.location.street} ${person.location.city} ${person.location.state}`}
                </div>
                <div>
                    <img src={person && `${person.picture.thumbnail}`} title={fullusername} />
                </div>
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