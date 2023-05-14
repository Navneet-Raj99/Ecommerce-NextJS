const Product = require('../../models/Product')
const main = require('../../middleware/db')
main();

export default async function handler(req, res) {
    try {
        if (req.method == "POST") {

            for (let i = 0; i < req.body.length; i++) {
                await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
            }

            res.status(200).json({
                success: "success"
            })
        }
    } catch (error) {
        res.json({ error: error })

    }

}
