import { Header, Button } from 'semantic-ui-react'

function ProductAttributes({ description }) {
  return <>
      <Header as="h3">About this product</Header>
      <p>{description}</p>
      <Button 
        icon="trash ternate outline"
        color="red"
        content="Delete Product"
      />
    </>
  
}

export default ProductAttributes;
