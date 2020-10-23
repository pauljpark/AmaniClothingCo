function CartItem({_id, name, price, qty, description, updateQty}) {

    const addOne = () => updateQty(_id, qty + 1)
    
    const subtractOne = () => updateQty(_id, qty - 1)

    return (
    <div className='CartItem'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
            <p>Quantity</p>
                <button onClick={subtractOne} disabled={qty <= 1}>-</button>
            {qty}
                <button onClick={addOne}>+</button>
    </div>
   )
}