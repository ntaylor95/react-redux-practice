import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const color = colors[Math.floor(Math.random()*5)];
    const className = `${color}-text`;

    console.log(`The class name is ${className}`);

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;