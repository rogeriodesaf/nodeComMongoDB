module.exports =  class ProductController{
    static showProducts(req,res){
        res.render('products/all')
    }
    static addProducts(req,res){
        res.render('products/add')
    }
}