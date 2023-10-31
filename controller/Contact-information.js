const Contact = require("../model/Contact-information");
// const { Email, AVAILABLETEMPLATES } = require("../utils/Email")
const { message } = require("../common/Message")
const sgMail = require("@sendgrid/mail");

// save contact-information details
// API_KEY = "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"

const createContactInformation = async (req, res, next) => {
    try {
        const { name, companyName, email, phone, message } = req.body
        if (name == undefined || name == "") {
            return res.json({
                staus: 422,
                message: "please fill Name!"
            });
        }
        if (companyName == undefined || companyName == "") {
            return res.json({
                staus: 422,
                message: "please fill Company Name!",
            });
        }
        if (email == undefined || email == "") {
            return res.json({
                staus: 422,
                message: "Please fill Email Address!",
            });
        }
        if (phone == undefined || phone == "") {
            return res.json({
                staus: 422,
                message: "please fill Phone number!"
            });
        }
        if (message == undefined || message == "") {
            return res.json({
                staus: 422,
                message: "please fill Message!"
            });
        }
        console.log(req.body)
        const contactInformation = new Contact({
            name: name,
            companyName: companyName,
            email: email,
            phone: phone,
            message: message,
        });
        console.log("email", email)
        // sgMail.setApiKey(API_KEY)
        // const text = {
        //     to: ["info@infosense.tech","vipinshukla.infosense@gmail.com"],
        //     from: "ankita.infosense@gmail.com",
        //     subject: "Hello from send grid",  
        //     text: "`Hello.<br>`",
        //     templateId: 'd-5ff3d303c3594c8b9e29a81a8bdcdc80',
        //     dynamic_template_data: { name, companyName, email, phone, message },
        //     text: `Hello. <br> Contact-Details. <br> Name: ${name},<br> Company-Name: ${companyName}`,
        //     html: `<p>Hello. <br> Contact-Details.<br>Name: <b>${name}</b>, <b>${companyName}</b></p>`,
        // }
        // console.log("text.........", text)
        // try {
        //     sgMail.send(text)
        //         .then(response => console.log("Email sent ..........", response))
        //         .catch(error => console.log("error...........", error.text))
        //         console.log()
             await contactInformation.save();
        //     return res.status(200).json({
        //         status: 200,
        //         success: true,
        //         message: "Contact information details saved successfully!",
        //         data: contactInformation
        //     });
        // } catch (error) {
        //     console.log("error...........+++++++++++++++++==", error)

        //     console.log(error, 76)
        // }
        // sgMail.send(text)
        return res.status(200).json({
            status: 200,
            success: true,
            message: "Contact information details saved successfully!",
        })
    } catch (error) {
        console.log("error...........", error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: message.ERROR_MESSAGE
        });
    }
};


// contact- details
const contactDetails = async (req, res) => {
    try {
        let data = await Contact.find().sort({ createdAt: -1 });
        return res.status(200).json({
            status: 200,
            success: true,
            message: "Contact details",
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: message.ERROR_MESSAGE,
        });
    }

};


// contact details by id

const contactDetailsByiD = async (req, res) => {
    try {
        const { params } = req;
        const { id } = params;
        const contactDetails = await Contact.findOne({ _id: id }).sort({ createdAt: -1 });;
        console.log("contactDetails", contactDetails);
        if (contactDetails) {
            return res.status(200).json({
                status: 200,
                message: message.CONTACT_DETAILS,
                data: contactDetails,
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


module.exports = {
    contactDetails,
    createContactInformation,
    contactDetailsByiD
};