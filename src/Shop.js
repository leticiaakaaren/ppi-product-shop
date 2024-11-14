import { useEffect, useState } from "react";
import Product from "./components/Product";

export default function Shop() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/products/category/womens-shoes?limit=12&select=id,thumbnail,title,price,description");

            if (response.ok) {
                const result = await response.json();
                setProducts(result.products);
            } else {
                setError("Fetch FAILED!");
            }
            setLoading(false);
        }

        fetchProducts();
    }, []);



    return (

        <section id="shop">
            <h2>Elegant Products for Everyone!</h2>

            <ul id="products">
                {error && <p>{error}</p>}
                {!loading && products ? (

                     products.map((product) => <li key={product.id}>
                         <Product {...product} />
                        </li>)
                    
                ) : (
                    <div id="loading">
                        <CircularProgress size="10rem" color ="inherit"/>
                        <p>Loading Products...</p>
                    </div>

                    )}

            </ul>
        </section>

    );
}