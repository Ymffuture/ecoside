import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import appleWatch from '../assets/apple-watch.png';
import headphones from '../assets/headphones.png';
import iphone11Black from '../assets/iphone-11-black.png';
import iphone11Green from '../assets/iphone-11-green.png';
import iphone11Red from '../assets/iphone-11-red.png';
import iphone11White from '../assets/iphone-11-white.png';

const ListItem = () => {
    const products = [
        {
            id: 1,
            image: appleWatch,
            name: "Apple Watch",
            smallDescription: "Series 5 SE",
            price: 529.99,
        },
        {
            id: 2,
            image: headphones,
            name: "Sony ZX33OBT",
            smallDescription: "Light Grey",
            price: 39.99,
        },
        {
            id: 3,
            image: iphone11Black,
            name: "iPhone 11",
            smallDescription: "Serious Black",
            price: 619.99,
        },
        {
            id: 4,
            image: iphone11Green,
            name: "iPhone 11",
            smallDescription: "Subway Blue",
            price: 619.99,
        },
        {
            id: 5,
            image: iphone11Red,
            name: "iPhone 11",
            smallDescription: "Product RED",
            price: 619.99,
        },
        {
            id: 6,
            image: iphone11White,
            name: "iPhone 11",
            smallDescription: "Milky White",
            price: 619.99,
        },
        {
            id: 7,
            image: iphone11Red,
            name: "iPhone 13",
            smallDescription: "Product RED",
            price: 619.99,
        },
        {
            id: 8,
            image: iphone11Red,
            name: "iPhone 14",
            smallDescription: "Product RED",
            price: 619.99,
        }
    ];
    
    return (
        <>
        <div className='container'>
            <div className='row'>
                {products.map(product => (
                    <div key={product.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card'>
                            <img src={product.image} alt={product.name} className="rounded" height='230' width='190' />
                            <div className="card-content d-flex flex-column">
                                <div className="card-title">{product.name}</div>
                                <div className="card-description">{product.smallDescription}</div>
                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                    <span className="card-price">{product.price}</span>
                                    <button className='btn bg-dark'>
                                        <i className='bi bi-bag-plus-fill' style={ {color: 'white'} }></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
};

export default ListItem;