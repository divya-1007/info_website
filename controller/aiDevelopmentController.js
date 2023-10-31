const aiDevelopment = require("../model/aiDevelopmentModel");
const { Email, AVAILABLETEMPLATE } = require("../utils/infosenseEmail");
const nodemailer = require("nodemailer");

const Joi = require("joi");

const aiDevelopmentService = async (req, res) => {
  try {
    const { full_Name, email, message,phoneNumber } = req.body;
  console.log(req.body,"aya");
    const schema = await Joi.object({
      email: Joi.string().email().required().messages({
        "string.empty": `Please enter your email address.`,
        "string.email": `please enter valid email address.`,
      }),

      full_Name: Joi.string()
        .trim()
        .regex(/^[a-zA-Z0 ]/, "please enter valid fullname")
        .required()
        .messages({
          "string.empty": `Please enter your fullname`,
          "string.trim": `White space not allowed!`,
          "string.full_Name": `please enter valid fullname.`,
        }),
      message: Joi.string().required().messages({
        "string.empty": `message is a required field.`,
        "string.message": `please enter valid message.`,
      }),
    });
    
    const validation = schema.validate({
        full_Name: full_Name,
        email: email,
      message: message,
    });

    if (validation.error) {
      return res.status(422).send({
        status: 422,
        message: validation.error.details,
      });
    }
    let ContactUsDetails = new aiDevelopment({
        full_Name: full_Name,
        email: email,
        phoneNumber:phoneNumber,
        message: message,
    });

    let result = await ContactUsDetails.save();
    if (result) {

        const template = AVAILABLETEMPLATE.AI_Congratulations;
        const ccEmails = email;
        let today = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
        let months = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1))
    
        const emailData = {
          fullName: full_Name,
          email: email,
          message: message,
          phoneNumber:phoneNumber,
          setLink:"https://calendly.com/meeting-with-infosense/30?month="+months+"&date="+today
        };
      
      
        try {
          // Send the email using the Email class
          const emailResult = await Email.sendEmail(template, emailData,'infosenseai@gmail.com');
      
          // Check if the email was sent successfully
          if (emailResult.accepted.length > 0) {
            const template = AVAILABLETEMPLATE.AI_Development_Services;
            const emailResult = await Email.sendEmail(template, emailData,ccEmails);
            if (emailResult.accepted.length > 0) {
            console.log(`Email sent successfully to ${ccEmails}`);
            return res.status(200).json({
                status: 200,
                message: "Contactus successfully submit",
                details: result,
              });
            } else {
              console.error(`Failed to send email to ${ccEmails}`);
            }
          } else {
            console.error(`Failed to send email to info@infosense.tech`);
          }
        } catch (error) {
          console.error(`Error sending email: ${error.message}`);
        }
    } else {
      return res.status(404).json({ message: "ContactUs details not found" });
    }
  } catch (error) {
    console.log("error----------------->", error);
    return res.status(500).json({
        message: "Unexpected error occurred!",
      });
  }
};




module.exports = {
  aiDevelopmentService,
};

