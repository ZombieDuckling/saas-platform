import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/items/')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    }, []);

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
