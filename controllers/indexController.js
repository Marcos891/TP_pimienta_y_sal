
const products = require('../data/products')

module.exports = {
    index: (req, res, next) => {
        return res.render('index', {
             title: 'Express',
             products
             });
    }
}