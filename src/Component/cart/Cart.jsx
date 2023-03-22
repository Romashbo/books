import React from 'react'
import img from "./cover.jpeg"
import "./cart.css"

const Cart = ({ book }) => { 
    return (

        <div className="cart_group">

            {book.map((item) => {
             
                    let img = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (img != undefined && amount != undefined) {
                        return (
                         <div>
                            <div className="cart">
                                <div className="cart_content">
                                    <div className="img-center">
                                        <img className='cart-img' src={img} />
                                    </div>
                                    <div className='cart_aboute'>
                                        <p className='description'>{item.volumeInfo.categories}</p>
                                        <h3 className='cart_title'>{item.volumeInfo.title}</h3>
                                        <h5 className='cart-a'>{item.volumeInfo.authors}</h5>
                                        
                                    </div>
                                </div>
                            </div>
                         </div>
                        )
                    }

                })
            }
        </div>
    )
}

export default Cart
