const mongoose = require('mongoose');
const categorymodel = require('../models/category');

async function addCategory(req, res) {
    console.log(req.body);
    const userid = req.user._id;
    const { categodyname, createdBy } = req.body;
    try {
        const existingCategory = await categorymodel.findOne({ categoryname });
        if (existingCategory) {
            return res.status(400).json({
                msg: "category already exists"
            });
        } else {
            const newCategory = new categorymodel({
                categoryname,
                createdBy: userid,
                createdAt: Date.now()
            })
            await newCategory.save();
            res.status(201).json({
                msg: "category Added successfully"
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: "Internal server error"
        })
    }
}

async function getCategoryById(req, res) {
    console.log(req.body);
    const { id } = req.params;

    try {
        const category = await categorymodel.findById(id);
        console.log(id);
        if (!category) {
            res.status(404).json({
                msg: "category id is not found"
            });
        }
        return res.status(201).json({
            categoryname: category.categoryname
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Internal server error"
        })
    }
}


async function getCategory(req, res) {
    try {
        const category = await categorymodel.find();
        res.status(201).send({ category: category });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteCategory(req, res) {
    console.log(req.body);
    const { id } = req.params;
    try {
        const category = await categorymodel.findByIdAndDelete(id);
        if (!category) {
            res.status(404).json({ message: "Category Not Found" });
        }
        res.status(201).json({ message: "Category Deleted Sucessfully" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateCategory(req, res) {
    console.log(req.body);
    const { categoryname, createdBy } = req.body;
    const { id } = req.params;

    try {
        const category = await categorymodel.findByIdAndUpdate(id);
        if (!category) {
            res.status(404).json({ message: "Category Not Found" });
        }
        category.categoryname = categoryname || category.categoryname;
        category.createdBy = createdBy || category.createdBy;
        await category.save();
        res.status(201).send({ message: "Category Updated Sucessfully" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    addCategory,
    getCategoryById,
    getCategory,
    updateCategory,
    deleteCategory,
};