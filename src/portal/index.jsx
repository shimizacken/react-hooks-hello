import React from 'react';
//import { hot } from 'react-hot-loader';
import MainTitle from '../common/mainTitle';
import SubTitle from '../common/subTitle';
import Counter from '../counter';

const App = _ => <div>
                    <MainTitle text='Hello hooks!!!' />
                    <SubTitle text='hello hooks!' />
                    <Counter />
                </div>;

export default App;
//export default hot(module)(App);