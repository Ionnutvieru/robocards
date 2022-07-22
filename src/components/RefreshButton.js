import React from 'react';
import Button from 'react-bootstrap/Button';

function RefreshButton() {

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className="pa2 bw2">
            <Button variant="dark" onClick={refreshPage}>Refresh Robots List</Button>
        </div>
    )
}

export default RefreshButton;