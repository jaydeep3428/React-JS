import React from 'react';

const Product_card = ({ product }) => {
    // console.log(product);
    return (
        <div className="container-fluid foter pt-4 pb-5">
            <div className="container">
                <div className="row">
                    {product.map((item) => (
                        <div key={item.id} className="col-md-4 col-lg-3 mb-4 ">
                            <div className="card h-100 p-3 foter border-0 shadow  rounded-3">
                                <img src={item.image} alt={item.title} className='images' />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ wordWrap: 'break-word' }}>{item.title}</h5>
                                    <div className="card-text">
                                        <span>Rating: {item.rating.rate}</span>
                                        <span> ({item.rating.count})</span>
                                        <p>Price: ${item.price}</p>
                                        <button className='btn btn-primary'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product_card;
