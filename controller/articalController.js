const ArticalModel = require("../model/articalModel");
const message = require("../common/Message")


function updateData(){

}

//Created artical- Post
const articleCreate = async (req, res) => {
    try {
        const { file } = req;
        console.log("file", file);

        const { title, description, short_description } = req.body;
        console.log("req.body------------------", req.body);
        const articalSaved = await ArticalModel.create({
            title,
            image: process.env.BASE_URL + req.files.image[0].filename,
            pdf: process.env.BASE_URL + req.files.pdf[0].filename,
            description,
            short_description,
            // slug
        });
        console.log("articalSaved-----------------------------------", articalSaved)
        return res.status(200).json({
            message: "artical data added",
            data: articalSaved,
        });
    } catch (error) {
        console.log("error-------------------", error);
        return res.status(500).json({
            message: message.ERROR_MESSAGE,
        });
    }
}

//Get- BySlug
const getArticalData = async (req, res) => {
    try {
        const { params } = req;
        const { slug } = params;
        const articalDeatils = await ArticalModel.findOne({ slug: slug });
        console.log("articalDeatils--------------", articalDeatils);
        if (articalDeatils) {
            return res.status(200).json({
                status: 200,
                message: "Artical data get successfully!",
                data: articalDeatils,
            });
        }
        return res.status(404).json({
            status: 404,
            message: message.DATA_NOT_FOUND,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: message.ERROR_MESSAGE,
        });
    }
};

//Get - All data
const getArticalList = async (req, res) => {
    try {
        const articalDeatils = await ArticalModel.find().sort({ createdAt: -1 });
        console.log("articalDeatils--------------", articalDeatils);
        if (articalDeatils) {
            return res.status(200).json({
                status: 200,
                message: "Artical list cretaed successfully!",
                data: articalDeatils,
            });
        }
        return res.status(404).json({
            status: 404,
            message: message.DATA_NOT_FOUND,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: message.ERROR_MESSAGE,
        });
    }
}

//Update- ById
const updateArtical = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, short_description } = req.body;
        const slugify = (str) =>
            str
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_-]+/g, "-")
                .replace(/^-+|-+$/g, "");

       
        const { files } = req;


        const artical = await ArticalModel.findOne({ _id: id });

        if (!artical) {
            return res.status(422).json({
                status: 422,
                message: "Invalid article ID...",
            });
        }
        let setData = {};
        if(files.image){
           setData = {
                title: title,
                description: description,
                image: process.env.BASE_URL + files.image[0].filename,
                short_description: short_description,
                slug: slugify(title),
            }
        }else if(files.pdf){
             setData = {
                title: title,
                description: description,
                pdf:process.env.BASE_URL + files.pdf[0].filename,
                short_description: short_description,
                slug: slugify(title),
             }

        }else if(files.pdf && files.image) {
             setData = {
                title: title,
                description: description,
                image: process.env.BASE_URL + files.image[0].filename,
                pdf:process.env.BASE_URL + files.pdf[0].filename,
                short_description: short_description,
                slug: slugify(title),
            }
        }else{
            setData = {
                title: title,
                description: description,
                short_description: short_description,
                slug: slugify(title),
             }
          }

      
        const updateArtical = await ArticalModel.findOneAndUpdate(
            { _id: id },
            {$set:setData,},
            { new: true }
        );
     
        if(updateArtical){
        return res.status(200).json({
            status: 200,
            message: "Artical updated successfully!",
            data: updateArtical,
        });
        }else{
            return res.status(500).json({
                status: 500,
                message: "Artical Not Update Please Try again",
            });
        }
    } catch (error) {
        console.log("error-------", error)
        return res.status(500).json({
            status: 500,
            message: error,
        });
    }
};

//Get - ById
const articalData = async (req, res) => {
    try {
        const { params } = req;
        const { id } = params;
        const getArticalDeatails = await ArticalModel.findOne({ _id: id });
        console.log("getArticalDeatails", getArticalDeatails);
        if (getArticalDeatails) {
            return res.status(200).json({
                status: 200,
                message: "Artical data details created successfully!",
                data: getArticalDeatails,
            });
        }
        return res.status(404).json({
            status: 404,
            message: message.DATA_NOT_FOUND,
        });
    } catch (error) {
        console.log("error-------------", error)
        return res.status(500).json({
            status: 500,
            message: message.ERROR_MESSAGE,
        });
    }
};

//Delete - ById
const articalDelete = async (req, res, next) => {
    try {

        const { params } = req;
        const { id } = params;

        const dataDelete = await ArticalModel.findOne({ _id: id });
        console.log("dataDelete--------", dataDelete)
        if (!dataDelete) {
            return res.status(404).json({
                status: 404,
                message: message.DATA_NOT_FOUND,
            });
        }
        await ArticalModel.deleteOne({ _id: id });
        return res.status(200).json({
            status: 200,
            message: "Artical data deleted successfully!",

        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: message.ERROR_MESSAGE,
        });
    }
};



module.exports = {
    articleCreate,
    getArticalData,
    getArticalList,
    updateArtical,
    articalData,
    articalDelete
}
