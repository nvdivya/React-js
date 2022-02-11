import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentBox';
import Button from './Button.js';
//creating a component
const App = () => {
    return (
        <>     
        <Button>
         <CommentBox name="Divya" />
        </Button>
        </>

    )
};
//To Display
ReactDOM.render(
    <div>
    <App />
    </div>,
    document.getElementById('root')
);