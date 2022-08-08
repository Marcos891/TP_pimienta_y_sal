const products = require('../data/products')

module.exports = {
    detail : (req,res) => {
        let product = products.find(products => products.id === +req.params.id)

        return res.render('detalleMenu', {
            product
        })
    }
}