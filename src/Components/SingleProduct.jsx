import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        getData()
    }, [params.id])

    const getData = async () => {
        setLoading(true)
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const response = await data.json()
        setProduct(response)
        setLoading(false)
    }

    if (loading) {
        return <div className='container'>Loading...</div>
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <div className='row'>
                    <div className="col-md-4 col-lg-3 mb-4 ">
                        <div className='card h-100 p-3 border-0 shadow rounded-3'>
                            <img src={product.image} alt={product.title} className='images' />
                            <div className="card-body">
                                <h5 className="card-title" style={{ wordWrap: 'break-word' }}>{product.title}</h5>
                                <div className="card-text">
                                    {product.rating && (
                                        <>
                                            <span>Rating: {product.rating.rate}</span>
                                            <span> {product.rating.count}</span>
                                        </>
                                    )}
                                    <p>Price: ${product.price}</p>
                                    <button className='btn btn-primary'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
