import React from 'react';
import { hot } from 'react-hot-loader';
import MainTitle from '../common/mainTitle';
import SubTitle from '../common/subTitle';

const App = _ => <div>
                    <MainTitle text='Hello hooks!!!' />
                    <SubTitle text='hello hooks!' />
                </div>;

export default hot(module)(App);