import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button classNameName="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default PrimaryButton;