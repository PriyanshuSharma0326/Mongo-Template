import Products from "../Models/productsModel.js";

const getAllProducts = async (req, res) => {
    try {
        const productsList = await Products.find();
        res.status(200).json({ success: true, message: 'All Products', data: productsList })
    } catch(err) {
        res.status(400).json({ success: false, message: err });
    }
}

const getSingleProduct = (req, res) => {
    // const { id } = req.params;
    // const findProduct = products.find(item => item.id == id);
    // if(!findProduct) {
    //     res.status(200).json({ success: true, message: `Product with id=${id} not found!` });
    // }
    // else {
    //     res.status(200).json({ success: true, data: findProduct });
    // }
    res.status(200).json({ success: true, message: 'Single Product' });
}

const createProduct = (req, res) => {
    new Products(req.body)
    .save()
    .then(() => {
        res.status(200).json({ success: true, message: 'Product created!' });
    })
    .catch((err) => {
        res.status(400).json({ success: false, message: err });
    });
}

const updateProduct = (req, res) => {
    res.status(200).json({ success: true, message: 'Update Product' });
}

const deleteProduct = async (req, res) => {
    // const findProduct = products.find(item => item.id == id);
    // if(!findProduct) {
    //     res.status(200).json({ success: true, message: `Product with id=${id} not found!` });
    // }
    // else {
    //     const updatedList = products.filter(item => item.id != id)
    //     res.status(200).json({ 
    //         success: true, 
    //         data: [ ...updatedList ] 
    //     });
    // }
    try {
        const { id } = req.params;
        const response = await Products.findByIdAndDelete(id);
        if (response) {
            res.status(200).json({ success: true, message: 'Product deleted!' })
        }
    }
    catch (err) {
        res.status(400).json({ success: false, message: err });
    }
}

export {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
