const FlexiContact = require("../model/ContactModelFlexi");
const FlexiEnquire = require("../model/EnquireModelFlexi");
const { Email, AVAILABLETEMPLATES } = require("../utils/Email")
const nodemailer = require("nodemailer");

const Joi = require("joi");


const SENDMAILA = async () => {
    
 const transporter = await nodemailer.createTransport({
    service: "gmail",
    host:"smtp.gmail.com",
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
     transportMethod: 'SMTP',
    auth: {
        user:'divyachourasiya.infograins@gmail.com',
        pass: "qxdujecsoudvqznj"
    },
  
  
    });
    let mailOptions ={}
    // if(contactUs === true){
   mailOptions = {
        from: 'divyachourasiya.infograins@gmail.com',
        to: 'divyachourasiya@infograins.com',
        subject: "Contact Us",
        text: 'Hello People!, Welcome to flexi-hub !',
        html: 'test Data flexi-hub'
    };
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
            transporter.sendMail(mailOptions, function(err, response){
                if(err) {
                    console.log(err);
                } 
                console.log('Message Sent' + response.messageId);
                smtpProtocol.close();
            });
        }
    });
}

// console.log(SENDMAILA());

const flexiContactUs = async (req, res) => {
  try {
    const { full_Name, email, message } = req.body;
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
    let ContactUsDetails = new FlexiContact({
        full_Name: full_Name,
      email: email,
      message: message,
    });

    let result = await ContactUsDetails.save();
    if (result) {

        const template = AVAILABLETEMPLATES.CONTACT_INFORMATION;
        const ccEmails = ['divya12@yopmail.com',email,'contact@flexi-hub.com','ajayshuklak@gmail.com','vipin.infograins@gmail.com'];
  
        // Prepare the data you want to pass to the email template
        const emailData = {
          fullName: full_Name,
          email: email,
          message: message,
          // Add any other data needed by your template here
        };
      
      
        try {
          // Send the email using the Email class
          const emailResult = await Email.sendEmail(template, emailData,ccEmails);
      
          // Check if the email was sent successfully
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


const flexiEnquire = async (req, res) => {
  try {
    const {
      first_Name,
      last_Name,
      email,
      phoneNumber,
      organization,
      offerings,
      seats,
    } = req.body;

    const schema = await Joi.object({
      first_Name: Joi.string()
        .trim()
        .regex(/^[a-zA-Z0 ]/, "please enter valid first name")
        .min(3)
        .max(25)
        .required()
        .messages({
          "string.empty": `Please enter your first name`,
          "string.trim": `White space not allowed!`,
          "string.first_Name": `please enter valid First Name.`,
          "string.min": `First name must be at least 3 characters long.`,
          "string.max": `Maximum 25 characters are allowed in the First name.`,
        }),
      last_Name: Joi.string()
        .regex(/^[a-zA-Z0 ]*$/, "please enter valid last name")
        .min(3)
        .max(25)
        .required()
        .messages({
          "string.empty": `Please enter your last name`,
          "string.last_Name": `please enter valid last_Name.`,
          "string.min": `last name must be at least 3 characters long.`,
          "string.max": `Maximum 25 characters are allowed in the Last name.`,
        }),
      email: Joi.string().email().required().messages({
        "string.empty": `Please enter your email address.`,
        "string.email": `please enter valid email address.`,
      }),
      phoneNumber: Joi.string()
        .regex(/^[0-9]{4,16}$/)
        .required()
        .messages({
          "string.pattern.base": `Phone number must have  required 4 to 16 digit number.`,
          "string.phoneNumber": `please enter valid phone Number .`,
        }),
      organization: Joi.string().required().messages({
        "string.empty": `Please enter your Organization.`,
        "string.organization": `please enter valid Organization.`,
      }),
      offerings: Joi.string().required().messages({
        "string.empty": `Please enter your Offerings.`,
        "string.offerings": `please enter valid Offerings.`,
      }),
      seats: Joi.string().required().messages({
        "string.empty": `Please enter your Seats.`,
        "string.seats": `please enter valid Seats.`,
      }),
    });

    const validation = schema.validate({
      first_Name,
      last_Name,
      email: email,
      phoneNumber,
      organization,
      offerings,
      seats,
    });

    if (validation.error) {
      return res.status(411).send({
        status: 411,
        message: validation.error.details[0].message,
      });
    }

    const flexiEnquire = await FlexiEnquire({
      first_Name,
      last_Name,
      email: email,
      phoneNumber,
      organization,
      offerings,
      seats,
    });

    const result = await flexiEnquire.save();
    if (result) {

        const template = AVAILABLETEMPLATES.ENQUIRE_FLEXI;
        const ccEmails = ['divya12@yopmail.com','ajayshuklak@gmail.com','vipin.infograins@gmail.com'];
  
        // Prepare the data you want to pass to the email template
        const emailData = {
            first_Name:first_Name,
            last_Name:last_Name,
            email: email,
            phoneNumber:phoneNumber,
            organization:organization,
            offerings:offerings,
            seats:seats,
            type:'Enquire'
        };
      
      
        try {
          // Send the email using the Email class
          const emailResult = await Email.sendEmail(template, emailData,ccEmails);
      
          // Check if the email was sent successfully
          if (emailResult.accepted.length > 0) {

            return res.status(200).json({
                status: 200,
                message: "Enquire successfully submit",
                details: result,
              });
          } else {
            console.error(`Failed to send email to ${ccEmails}`);
          }
        } catch (error) {
          console.error(`Error sending email: ${error.message}`);
        }

    } else {
      return res
        .status(409)
        .json({ status: false, message: "Data not Save Please Try Again " });
    }
  } catch (error) {
    console.log("error----------------->", error);
    return res.status(500).json({
      message: "Unexpected error occurred!",
    });
  }
};

module.exports = {
  flexiContactUs,
  flexiEnquire,
};
