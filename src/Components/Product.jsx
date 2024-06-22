import React, { useEffect, useState } from "react";
import Product_card from "./Product_card";

const URL = "https://fakestoreapi.com/products";

function Product() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData(URL);
    }, [])

    async function fetchData(url) {
        const fet = await fetch(url);
        const finalData = await fet.json();
        setProduct(finalData);
    }

    // console.log("product api", product);

    return (
        <div>
            <Product_card product={product} />
        </div>
    )
}

export default Product