import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getRepo } from './api';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

const Search = () => {
    const dispatch = useDispatch();
    const Repos = useSelector(state => state.Repos);
    console.log(Repos);
    const { querry } = useParams();
    useEffect(() => {
        dispatch(getRepo(querry));
    }, []);
    return (
        <div>
            {
                Repos.repos.map(item => <h2 key={item.id}>{item.name}</h2>)
            }
        </div>
    );
}

export default Search;
