import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getRepo } from './api';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import style from './search.module.css'

const Search = () => {
    const dispatch = useDispatch();
    const Repos = useSelector(state => state.Repos);
    console.log(Repos);
    const { querry } = useParams();
    useEffect(() => {
        dispatch(getRepo(querry));
    }, []);
    return (
        <div className={style.flex}>
            {
                Repos.repos.map(item =>
                    <div key={item.id}>
                        <ProductCard key={item.id} name={item.name} url={item.clone_url} desc={item.description} create={item.created_at} />
                    </div>)
            }
        </div>
    );
}

export default Search;
