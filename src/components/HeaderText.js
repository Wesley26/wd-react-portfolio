import React from 'react'

function HeaderText(props) {
    return (
        <h1 className="p-3">
            Hello {props.name} This is more demo text for the sub-header.
        </h1>
    );
};

export default HeaderText;