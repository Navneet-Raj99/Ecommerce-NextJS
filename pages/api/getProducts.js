const Product=require('../../models/Product')
const main=require('../../middleware/db')
main();
export default async function handler(req, res) {
    try {
        let allproduct= await Product.find();
        res.status(200).json({
            Allproduct:allproduct
        })
    } catch (error) {
        res.json({error:error})
    }

  }
  