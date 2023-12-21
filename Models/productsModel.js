import { Schema, model } from "mongoose";

const productsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minLength: [5, 'Title must be atleast 5 characters'],
        },
        price: {
            type: Number,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minLength: [20, 'Description must be atleast 20 characters'],
        },
        category: {
            type: String,
            required: true,
            trim: true,
            minLength: [20, 'Description must be atleast 20 characters'],
        },
    },
    {
        timestamps: true,
    }
);

const Products = model('Products', productsSchema);

export default Products;
