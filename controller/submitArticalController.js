const { message } = require("../common/Message");
const SubmitModel = require("../model/submitArticalModel");
const sgMail = require("@sendgrid/mail");
//const path = require("path")

// API_KEY = "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"

// let attachments = fs.readFileSync("/home/php/Documents/project/public/1684921473937.pdf").toString("base64")
//  console.log("attachments.........", attachments)

//Create- Post
const submitData = async (req, res) => {
    try {
        const { name, email, number, purpose, requirements, file } = req.body;
        const filepath = file;

        const submitDataSaved = SubmitModel({
            name,
            email,
            number, 
            purpose,
            filepath,
            requirements
        });
        const saveData = await submitDataSaved.save();

        if(saveData){
        sgMail.setApiKey(API_KEY)

        const text = { 
            to: email,
            from: "ankita.infosense@gmail.com",
            subject: "Hello from send grid",
            text: "`Hello.<br>`",
            templateId: 'd-ed797985fdd142f28fa9a5a7945194cc',
            dynamic_template_data: { name, email, number, filepath },
            text: `Hello.  <br> Name: ${name},<br> email: ${email}`,
            html: `<p>Hello. <br>Name: <b>${name}</b>, <b>${email}</b>,<b>${filepath}</b></p>`,
            text: `hello admin`
        }
            
        sgMail.send(text)
            .then(response => console.log("Email sent ..........", response))

            .catch(error => console.log("error.......1....", error.text))

        
        return res.status(200).json({
            status: 200,
            success: true,
            message: "Submit artical details saved successfully!",
            data: submitDataSaved
        });
        
    }else{
    return res.status(412).json({
        status: 412,
        success: false,
        message: "Data Not Save Please Try Again",
    });
    }
    } catch (error) {
        console.log("error-----------2--------", error);
        return res.status(500).json({
            message: message.ERROR_MESSAGE,
        });
    }
}


//Get - By Slug
const getSubmitData = async (req, res) => {
    try {
        const { params } = req;
        const { id } = params;
        const submitDeatils = await SubmitModel.findOne({ _id: id });
        console.log("submitDeatils--------------", submitDeatils);
        if (submitDeatils) {
            return res.status(200).json({
                status: 200,
                message: "Submit data get successfully!",
                data: submitDeatils,
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

// Update - By Id
const updateSubmitArtical = async (req, res) => {
    try {
        const { id } = req.params;
        //  console.log("pdfffffffffffffff================", req.files.pdf[0].filename,)
        const { name, email, number, purpose, requirements } = req.body;
        const aubmitArtical = await SubmitModel.findOne({ _id: id });
        if (!aubmitArtical) {
            return res.status(422).json({
                status: 422,
                message: "Invalid Id...",
            });
        }
        const updateSubmitArtical = await SubmitModel.findOneAndUpdate(
            { _id: id },
            {$set: {
                    name,
                    email,
                    number,
                    purpose,
                    requirements
                },
            },
            { new: true }
        );
        console.log("updateSubmitArtical------------------", updateSubmitArtical)
        return res.status(200).json({
            status: 200,
            message: "submit artical data updated successfully!",
            data: updateSubmitArtical,
        });
    } catch (error) {
        console.log("error-------", error)
        return res.status(500).json({
            status: 500,
            message: message.ERROR_MESSAGE,
        });
    }
};

//Get - By Id
const submitGetData = async (req, res) => {
    try {
        const { params } = req;
        const { id } = params;
        const getArticalDeatails = await SubmitModel.findOne({ _id: id });
        console.log("getArticalDeatails", getArticalDeatails);
        if (getArticalDeatails) {
            return res.status(200).json({
                status: 200,
                message: "Submit data details created successfully!",
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

module.exports = {
    submitData,
    getSubmitData,
    updateSubmitArtical,
    submitGetData
}