// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

// Create a react component
const App = () => {
    // Cannot reference JS object inside of JSX where we would show text
    //  const buttonText = { text: 'Click Me!' };
    const buttonText = 'Click Me!';
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" for="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {/* {buttonText.text} */}
                {buttonText}
            </button>
        </div >
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);