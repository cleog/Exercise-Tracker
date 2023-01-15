import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <nav className="exercises">
            <table>
                <thead>
                    <tr>
                        <th><Link to="/" className="nav-link">Home</Link></th>
                        <th><Link to="/add-exercise" className="nav-link">Add</Link></th>
                    </tr>
                </thead>
            </table>
        </nav>
    )
};

export default Navigation;