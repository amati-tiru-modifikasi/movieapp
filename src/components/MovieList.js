import React, { useState } from 'react'
import axios from 'axios'

// item
import MovieItem from './MovieItem'

const key = 'affcf0b4f1b2729cfa1a8fdb18e60c96';

// req
const getMovieData = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    console.log(res);
}

export default function MovieList() {

    getMovieData();

    const [items, setItems] = useState([]);

    return (
        <div>
            Movie List
        </div>
    )
}
