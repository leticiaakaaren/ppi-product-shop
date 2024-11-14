import { Link } from "react-router-dom";

export default function CheckOut(){
    return(
        <> 
        <section className="checkout">
            <h2>CheckOut</h2>
            <Link to="/" className="product-actions">
            <button>RETURN</button>
            </Link>     
            </section>
        </>
    );
}