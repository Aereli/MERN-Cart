import { Card } from 'semantic-ui-react'

function ProductList({products}) {
  function mapProductsToItems(products){
    return products.map(product =>({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: 'black',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }))
  } 
  return <Card.Group  stackable
                      centered
                      itemsPerRow='4'
                      items={mapProductsToItems(products)} />
}

export default ProductList;
