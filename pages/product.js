import axios from 'axios'
import ProductSummary from '../components/Product/ProductSummary'
import ProductAttributes from '../components/Product/ProductAttributes'
import baseUrl from '../utils/baseUrl'

function Product({ product, user}) {

  return (
    <>
      < ProductSummary {...product} />
      < ProductAttributes user={user} {...product} />
    </>
  )   
}

Product.getInitialProps = async ({ query: { _id }}) => {
  // const url = `http://localhost/3000/api/product?_id=${_id}`
  const url = `${baseUrl}/api/product`
  //this params is the same as above interpolation
  const payload = { params: { _id } }
  const response = await axios.get(url, payload)
  return { product: response.data }
}

export default Product;
  