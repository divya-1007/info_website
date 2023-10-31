const Gettouch = require("../model/Gettouch");
//const { Email, AVAILABLETEMPLATES } = require("../utils/Email")
const { message } = require("../common/Message")
const sgMail = require("@sendgrid/mail");

// API_KEY = "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"
//API_KEY= "SG.7ae6-mBpSuGgpZ4hb9JlGg.u2AJ_fFZ9bp-G6UbORJ2OBUYJgtgNAjGi9E5QiAyBJA"

const AddGetTouch = async (req, res, next) => {
    try {
        const { fullName, email, phone, subject,comment } = req.body
        if (fullName == undefined || fullName == "") {
            return res.json({
                staus: 422,
                message: "please fill fullName!"
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
        if (subject == undefined || message == "") {
            return res.json({
                staus: 422,
                message: "please fill Message!"
            });
        }
        if (comment == undefined || message == "") {
            return res.json({
                staus: 422,
                message: "please fill Message!"
            });
        }
        console.log(req.body)
        const getTouchInformation = new Gettouch({
            fullName: fullName,
            email: email,
            phone: phone,
            subject: subject, 
            comment:comment
        });
        console.log("email", email)
        sgMail.setApiKey(API_KEY)                                           
        const text = {
            to: ["info@infosense.tech","vipinshukla.infosense@gmail.com"],  
            from: "ankita.infosense@gmail.com",                        
            subject: "Hello from send grid",                     
           // text: "`Hello.<br>`",                                                   
           templateId: 'd-65ed1a4586a14e7a87f5727ffaf9bbc4', 
           dynamic_template_data: { fullName, email, phone, subject, comment }, 
           text: `Hello. <br> Get-Touch-Details. <br> Name: ${fullName}`,                            
           html: `<p>Hello. <br> Get-Touch-Details. <br>Name: <b>${fullName}</b>`,
        }
        console.log("text.........", text)
        try {
            sgMail.send(text)
                .then(response => console.log("Email sent ..........", response))   
                .catch(error => console.log("error...........", error.text))
            await getTouchInformation.save();
            return res.status(200).json({
                status: 200,
                success: true,
                message: "Get-Touch information details saved successfully!",
                data: getTouchInformation
            });
        } catch (error) {
            console.log(error, 76)
        }
        // sgMail.send(text)
    } catch (error) {
        console.log("error...........", error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: message.ERROR_MESSAGE
        });
    }
};

const gettouchDetails = async (req, res) => {
    try {
        let data = await Gettouch.find().sort({ createdAt: -1 });
        return res.status(200).json({
            status: 200,
            success: true,
            message: "Get-Touch details",
            data:data
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: message.ERROR_MESSAGE,
        });
    }

};

module.exports = {
    AddGetTouch,
    gettouchDetails
}