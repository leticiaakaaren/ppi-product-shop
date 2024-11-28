import { useContext, useEffect, useRef, useState } from "react";
import Product from "./Product";
import { CircularProgress } from "@mui/material";
import { CartContext } from "../context/CartContext";
import styles from "./Shop.module.css";

export default function Shop() {

    const { products, loading, error } = useContext(CartContext);

    const searchInput = useRef("");
    const [filterdItems, setFilteredItems] = useState ([]);

    function handleSearch() {
        const term = searchInput.current.value.toLowerCase();
        setFilteredItems(
        products.filter((item) => item.title.toLowerCase().includes(term))
        );
    }


    function clearSearch() {
        searchInput.current.value = ""
    }

    return (
        <section id="shop">
            <h2>Elegant Products for Everyone</h2>

            <div className={styles.search_container}>
                 <div className={styles.search_box}>
                <input 
                ref= {searchInput}
                className={styles.search_input}
                tupe="text"
                palceholder="Type to search..."
                onChange={handleSearch}
                />
            
                <button className={styles.search_clear} onClick={clearSearch}>CLEAR</button>
                </div>
            </div>

            <ul id="products">
                {error && <p>{error}</p>}
                {!loading && products ? (

                    products.map((product) => <li key={product.id}>
                        <Product {...product} />
                    </li>)

                ) : (

                    <div id="loading">
                        <CircularProgress size="10rem" color="inherit" />
                        <p>Loading products.........</p>
                    </div>

                )}


            </ul>

        </section>
    );
}