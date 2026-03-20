import axios from 'axios'
import './HomePage.css'
import { Header } from '../components/Header';
// import { formatMoney } from '../utils/money';
import { useEffect, useState } from 'react';
import {Product} from '../components/Product'

export function HomePage({ cart, loadCart }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:3000/api/products').then((response) => {
        //     response.json().then((data) => {console.log(data);});
        // })
        // axios.get('http://localhost:3000/api/products').then((response) => {
        //     setProducts(response.data);
        // });

        const getProducts = async () => {
            let response = await axios.get('http://localhost:3000/api/products');
            setProducts(response.data);
        }
        getProducts();
    }, []);



    return (
        <>
            <Header cart={cart}/>

            <div className="home-page">

                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <Product key={product.id} product={product} loadCart={loadCart}/>
                        );
                    })}

                </div>
            </div>
        </>
    );
}