import React from 'react';
import ReactDOM from 'react-dom';
import MainTitle from './common/mainTitle';
import SubTitle from './common/subTitle';

ReactDOM.render(
    <div>
        <MainTitle text='Hello hooks!' />
        <SubTitle text='hello hooks!' />
    </div>,
    document.getElementById('root')
);