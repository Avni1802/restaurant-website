import React,{useEffect, useState} from 'react';
import Card from './Card';

const Cards = () =>{
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('');
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    useEffect(() =>{
        getMenu();
    },[query]);

    const [menus,setMenus] = useState([]);

    const getMenu = async () => {
        const resp = await fetch(URL);
        const data = await resp.json();
        const meals = await data.meals;
        setMenus(meals);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        console.log(query);
    }

    return (
        <div id="menus">
        <div className="searchBar">
            <form onSubmit={getSearch} action="" className="search-form">
                <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>

            </div>

            <div className="menu">
            {menus.map(menu => (
                <Card key = {menu.idMeal}title={menu.strMeal} ing={menu} img={menu.strMealThumb}  />
                ))}
            </div>
            </div>
    )

}

export default Cards;