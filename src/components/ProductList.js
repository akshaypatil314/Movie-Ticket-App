import '../App.css';

function ProductList({ product, addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div className="container my-5" style={{ width: 450, height: 450, fontSize: 20 }} >
                            <div className='product-item mx-1 my-1'>
                                <img src={productItem.url} style={{ width: 300, height: 350 }} />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button className='btn btn-dark'
                                    onClick={() => addToCart(productItem)}
                                >Book-Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;