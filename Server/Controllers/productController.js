import Products from "../Models/productsModel.js";

const getAllProducts = async (req, res) => {
    try {
        const productsList = await Products.find();
        res.status(200).json({ success: true, message: 'All Products', data: productsList })
    } catch(err) {
        res.status(400).json({ success: false, message: err });
    }
}

const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    const item = await Products.findById(id);
    if(!item) {
        res.status(200).json({ success: false, message: `Product with id=${id} not found!` });
    }
    else {
        res.status(200).json({ success: true, data: item });
    }
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

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Products.findByIdAndUpdate(id, req.body);
        if (response) {
            res.status(200).json({ success: true, message: 'Update Product successful!' });
        }
    }
    catch (err) {
        res.status(400).json({ success: false, message: err });
    }
}

const deleteProduct = async (req, res) => {
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
