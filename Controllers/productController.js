// import { products } from '../data.js';
import Products from "../Models/productsModel.js";

const getAllProducts = (req, res) => {
    // res.status(200).json({ success: true, data: products });
    res.status(200).json({ success: true, message: 'All Products' });
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
        res.status(400).json({ success: true, message: err });
    });
}

const updateProduct = (req, res) => {
    res.status(200).json({ success: true, message: 'Update Product' });
}

const deleteProduct = (req, res) => {
    // const { id } = req.params;
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
    res.status(200).json({ success: true, message: 'Delete Product' });
}

export {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
