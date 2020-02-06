import React from 'react'
import { Input } from 'semantic-ui-react'


function AddProductToCart() {
  const [quantity, setQuantity] = React.useState(1)
  return <>
    <Input 
      type="number"
      min="1"
      placeholder="quantity"
      value={quantity}
      onChange={event = setQuantity(event.target.value)}
      action={{
        color: "teal",
        content: "Add to Cart",
        icon: "plus cart"
      }}
    />
  </>
}

export default AddProductToCart;
