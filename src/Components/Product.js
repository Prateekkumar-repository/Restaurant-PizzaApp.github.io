import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const Product = (props) => {
  const[isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext)
  const { product } = props;

  const addToCart = (event, product) => {
    event.preventDefault();
    // event.stopPropogation();
    let _cart = {...cart}; // 3 dots sperad operator for cloning
    if(!_cart.items) {
      _cart.items = {}
    }
    if(_cart.items[product._id]) {
      _cart.items[product._id] +=1 ; 
    } else {
      _cart.items[product._id] = 1
    }
    if(!_cart.totalItems ) {
      _cart.totalItems = 0
    }
    _cart.totalItems +=1;
    setCart(_cart);

    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      // alert('Item added to cart')
    }, 1000);

  }

  return (
    <>
      <Link to={`/products/${product._id}`}>
          <div>
            <div>
                    <img src={ product.image } alt="pizza picture" />
                    <div className='text-center'>
                        <h2 className='text-lg font-bold my-2'>{product.name}</h2>
                        <span className='font-bold text-yellow-600 bg-yellow-100 py-1 rounded-full text-sm px-4'>{product.size}</span>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <span className="font-bold">₹ {product.price}</span>
                        <button disabled={isAdding} onClick={ (e) => addToCart(e, product) } className={`${ isAdding ? 'bg-yellow-500' : 'bg-yellow-400'} py-1 px-4 rounded-full font-bold `}>ADD{ isAdding ? 'ED' : ''}</button>
                    </div>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Product