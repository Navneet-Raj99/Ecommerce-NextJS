const Product = require('../../models/Product')
const main = require('../../middleware/db')
main();

export default async function handler(req, res) {
    try {
        if (req.method == "POST") {

            for (let i = 0; i < req.body.length; i++) {
                console.log(req.body.length)
                 let p = await Product.create(
                    {
                        title: req.body[i].title,
                        slug: req.body[i].slug,
                        desc: req.body[i].desc,
                        img: req.body[i].img,
                        category: req.body[i].category,
                        size: req.body[i].size,
                        color: req.body[i].color,
                        price: req.body[i].price,
                        availableQty: req.body[i].availableQty
                    }
                )

                // console.log(p)
            }

            res.status(200).json({
                success: "success"
            })
        }
    } catch (error) {
        res.json({error:error})

    }

}
