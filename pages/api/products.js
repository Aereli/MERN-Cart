//this is to set up a static database before it is sent over to mongoDb
// import products from '../../static/products.json'

import Product from '../../models/Product'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
  // line below imports the static json
  // res.status(200).json(products)

  const products = await Product.find()
  res.status(200).json(products)

} 