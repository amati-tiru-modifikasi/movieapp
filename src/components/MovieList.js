import React, { useState, useEffect } from 'react'
import axios from 'axios'

// item
import MovieItem from './MovieItem'

export default function MovieList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const key = 'affcf0b4f1b2729cfa1a8fdb18e60c96';
        // req
        const getMovieData = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
            setItems(res.data.results);
        }
        getMovieData();
    }, [])

    return (
        <div>
            Movie List
        </div>
    )
}
