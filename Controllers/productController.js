// import { products } from '../data.js';
import Products from "../Models/productsModel.js";

const getAllProducts = (req, res) => {
    // res.status(200).json({ success: true, data: products });
    res.status(200).json({ success: true, message: 'All Product' });
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
    res.status(200).json({ success: true, message: 'Create Product' });
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
