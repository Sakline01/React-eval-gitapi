import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const Home = () => {
    const [text, setText] = useState("");

    const handleClick = () => {

    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField value={text} onChange={(e) => setText(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
            <Link to={`/search/q=${text}`}><Button variant="contained" color="primary" onClick={handleClick}>SEARCH</Button></Link>
        </div>
    );
}


export default Home;
