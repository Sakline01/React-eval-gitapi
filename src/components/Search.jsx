import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getRepo } from './api';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import style from './search.module.css'
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));


const Search = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [jumpPage, setJumpPage] = useState();
    // const ref = useRef();
    const Repos = useSelector(state => state.Repos);
    // const classes = useStyles();
    console.log(Repos);
    const { querry } = useParams();
    // console.log(ref.current)
    useEffect(() => {
        dispatch(getRepo(querry, page));
    }, [page]);
    return (
        <div>
            <div className={style.flex}>
                {
                    Repos.repos.map(item =>
                        <div key={item.id}>
                            <ProductCard key={item.id} name={item.name} url={item.clone_url} desc={item.description} create={item.created_at} />
                        </div>
                    )
                }

            </div>
            <div className={style.flexbox}>

                <Button onClick={() => setPage(t => t - 1)}>prev</Button>
                <button>{page}</button>
                <Button onClick={() => setPage(t => t + 1)}>next</Button>
            </div>
            <div className={style.flexbox}>
                <input className={style.goto} onChange={(e) => setJumpPage(Number(e.target.value))} type="text" /><Button onClick={() => setPage(jumpPage)}>GO TO PAGE</Button>
            </div>
            {/* <div className={classes.root}>
                <Pagination ref={ref} count={10} variant="outlined" color="primary" />
            </div> */}
        </div>
    );
}

export default Search;
