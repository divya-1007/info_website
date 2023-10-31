const Case = require("../model/caseModel");
const { message } = require("../common/Message");
const caseImageModel = require("../model/caseImage");
const CaseStudyModel = require('../model/caseStudyModel')
const { Email, AVAILABLETEMPLATE } = require("../utils/infosenseEmail");
const Joi = require("joi");

// const baseUrl = "http://localhost:8000/public/";

// slug used here
const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

//save header data
const createHeader = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (title == undefined || title == "") {
      return res.json({
        status: 403,
        message: "please fill title",
      });
    }
    if (content == undefined || content == "") {
      return res.json({
        status: 403,
        messsage: "please fill content",
      });
    }
    const newTitle = new Case({
      title: title,
      content: content,
    });
    const headerData = await newTitle.save();
    console.log(headerData);
    if (!headerData) {
      return res.status(404).json({
        status: 404,
        message: message.DATA_NOT_FOUND,
      });
    } else {
      return res.status(201).json({
        status: 201,
        message: message.HEADER_CREATED,
        data: headerData,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE,
    });
  }
};

//get- header data
const getHeader = async (req, res) => {
  try {
    const { params } = req;
    const { id } = params;

    const headerDetails = await Case.findOne({ _id: id });
    if (headerDetails) {
      return res.status(200).json({
        status: 200,
        message: message.GET_HEADER,
        headerDetails,
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

//Create section
const createSection = async (req, res) => {
  try {
    const { title, content } = req.body;

    console.log("req.body", req.body);
    // var imageType = [];
    // // Populate users array
    // for(var imageType in imageType) {
    //   imageType.push(imageType[imageType]);
    // }
    console.log("imageType--------------------", req.body.imageType);
    if (title == undefined || title == " ") {
      return res.json({
        status: 403,
        message: "title is required...!",
      });
    }
    if (content == undefined || content == " ") {
      return res.json({
        status: 403,
        message: "content is required...!",
      });
    }
    if (req.body.imageType == undefined || req.body.imageType == " ") {
      return res.json({
        status: 403,
        message: "imageType is required...!",
      });
    }
    const createData = new Case({
      title: title,
      content: content,
    });
    await createData.save();
    if (req.files) {
      console.log(req.files);
      let file = "";

      req.files.forEach(function (files, index, arr) {
        const createImage = new caseImageModel({
          caseId: createData.id,
          // image: file + files.filename + "," + baseUrl,
          image: process.env.BASE_URL + file + files.filename,
          imageType: req.body.imageType[index],
        });
        if (req.files.length < 1) {
          return res.json({
            status: 403,
            message: "atleast one image is required...!",
          });
        }
        console.log("createImage-------------", createImage);
        createImage.save();
      });
    }
    return res.status(200).json({
      status: 200,
      message: message.SECTION_ADDED,
      data: createData,
    });
  } catch (error) {
    console.log("error-----------------", error);
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE,
    });
  }
};

//get section data
const getSection = async (req, res) => {
  try {
    const { params } = req;
    const { slug } = params;
    const sectionDetails = await Case.findOne({ slug: slug });
    if (sectionDetails) {
      return res.status(200).json({
        status: 200,
        message: message.GET_SECION,
        sectionDetails,
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

//get all data list
const caseList = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, sort, sortBy } = req.query;

    //sorting
    console.log("sort..", sort);
    let sortOrder = { [sortBy]: sort === "desc" ? -1 : 1 };

    let condition = {};
    const getList = await Case.find(condition)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sortOrder);
    const totalgetList = await Case.countDocuments(condition);
    if (!totalgetList) {
      return res.status(400).json({
        status: 400,
        message: message.DATA_NOT_FOUND,
      });
    }
    return res.status(200).json({
      status: 200,
      TotalgetList: totalgetList,
      message: message.CASE_LIST,
      data: getList,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE,
    });
  }
};

//update section data
const updateSection = async (req, res) => {
  try {
    const { slug } = req.params;
    const { file } = req;
    let image;
    if (req.file) {
      image = baseUrl + file.filename;
    } else {
      image = null;
    }
    const { title, content } = req.body;
    const section = await Case.findOne({ slug });
    if (!section) {
      return res.send("plz enter correct slug...");
    }

    const updatesection = await Case.findOneAndUpdate(
      { slug: slug },
      {
        $set: {
          title: title,
          content: content,
          image: image,
          slug: slugify(title),
        },
      },
      { new: true }
    );
    return res.status(200).json({
      status: 200,
      message: message.SECTION_UPDATED,
      updatesection,
    });
  } catch (error) {
    return res.status(500).json({
      status: 200,
      message: message.ERROR_MESSAGE,
    });
  }
};

// const updateSection = async (req, res) => {
//   var _id = req.params.id;
//   var title = req.body.title;
//   var content = req.body.content;
//   var image =
//     req.files && req.files.image != undefined && req.files.image.length > 0
//       ? req.files.image[0].filename
//       : "";

//   const data = await Case.findByIdAndUpdate(
//     { _id: _id },

//     { title: title, content: content, image: baseUrl + image }
//   );
//   console.log(data);
//   res.status(200).json({
//     msg: "update successfully",
//     response: data,
//   });
// };

// delete by Id case data
const deleteCase = async (req, res) => {
  try {
    let data = await Case.findByIdAndDelete({ _id: req.params.id });
    if (data) {
      return res
        .status(200)
        .json({
          status: 200,
          success: true,
          message: message.DELETED_CASE_DATA,
          response: data,
        })
        .send();
    } else {
      return res
        .status(404)
        .json({
          status: 404,
          success: false,
          message: message.ALREADY_DELETED,
        })
        .send();
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE,
    });
  }
};

//caseImage data saved
const createImage = async (req, res) => {
  const { caseId } = req.body;

  let imageData = new caseImageModel({
    caseId: caseId,
    // text: text,
  });
  if (req.files) {
    let file = "";
    req.files.forEach(function (files, index, arr) {
      file = file + files.filename + "," + process.env.BASE_URL;
    });
    file = file.substring(0, file.lastIndexOf(","));
    imageData.image = process.env.BASE_URL + file;
  }
  let result = await imageData.save();
  console.log(result);
  if (result) {
    return res.status(201).json({
      status: 201,
      success: true,
      message: "Data added successfully",
      result,
    });
  } else {
    return res.status(404).json({
      message: "data not found",
    });
  }
};

//caseImage create data
const caseImageCreated = async (req, res) => {
  try {
    const query = [
      {
        $lookup: {
          from: "case-images",
          localField: "caseId",
          foreignField: "id",
          as: "case",
        },
      },
      {
        $unwind: "$case",
      },
      {
        $group: {
          _id: {
            title: "$title",
            content: "$content",
          },
          details: {
            $push: {
              _id: "$case._id",
              imageType: "$case.imageType",
              image: "$case.image",
            },
          },
        },
      },
      {
        $project: {
          imageType: "$details",
        },
      },
    ];
    //aggregation used
    const totalcount = await Case.aggregate(query);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Data get successfully !",
      data: totalcount,
    });
  } catch (error) {
    console.log("error..................", error);
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE,
    });
  }
};

const inquiryForm = async(req,res)=>{
  try {
    const { first_Name,last_Name, email,phoneNumber } = req.body;
    console.log(req.body,"aya");
      const schema = await Joi.object({
        email: Joi.string().email().required().messages({
          "string.empty": `Please enter your email address.`,
          "string.email": `please enter valid email address.`,
        }),
  
        first_Name: Joi.string()
          .trim()
          .regex(/^[a-zA-Z0 ]/, "please enter valid first name")
          .required()
          .messages({
            "string.empty": `Please enter your first name`,
            "string.trim": `White space not allowed!`,
            "string.first_Name": `please enter valid first name.`,
          }),
          last_Name: Joi.string()
          .trim()
          .regex(/^[a-zA-Z0 ]/, "please enter valid last name")
          .required()
          .messages({
            "string.empty": `Please enter your last name`,
            "string.trim": `White space not allowed!`,
            "string.last_Name": `please enter valid last name.`,
          }),
          phoneNumber: Joi.string().required().messages({
          "string.empty": `Phone Number is a required field.`,
          "string.message": `please enter valid Phone Number.`,
        }),
      });
      
      const validation = schema.validate({
        first_Name: first_Name,
        last_Name:last_Name,
          email: email,
          phoneNumber: phoneNumber,
      });
  
      if (validation.error) {
        return res.status(422).send({
          status: 422,
          message: validation.error.details,
        });
      }
      let ContactUsDetails = new CaseStudyModel({
        first_Name: first_Name,
        last_Name:last_Name,
          email: email,
          phoneNumber:phoneNumber,
      });
  
      let result = await ContactUsDetails.save();
      if (result) {
  
          const template = AVAILABLETEMPLATE.CASE_STUDY;
          const ccEmails = ['infosenseai@gmail.com','info@infosense.tech'];

          const emailData = {
            first_Name: first_Name,
            last_Name:last_Name,
            email: email,
            phoneNumber:phoneNumber,
          };
        
        
          try {
            // Send the email using the Email class
            const emailResult = await Email.sendEmail(template, emailData,ccEmails);
        
            // Check if the email was sent successfully
            if (emailResult.accepted.length > 0) {
             
              return res.status(200).json({
                  status: 200,
                  message: "Contactus successfully submit",
                  details: result,
                });
          
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
    console.log("error..................", error);
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE,
    }); 
  }
}

const getInquiry = async(req,res)=>{
  try {
     const findData = await CaseStudyModel.findOne({ _id: req.params.id });
     
     if(findData){
      return res.status(200).json({
             status: 200,
             message: "successfully",
            details: findData,
          });
     }else{
     return res.status(404).json({ message: "Data Not Founs" });
     }
    
   } catch (error) {
    console.log("error..................", error);

    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE,
    }); 
  }
}

module.exports = {
  createHeader,
  getHeader,
  createSection,
  getSection,
  caseList,
  deleteCase,
  updateSection,
  createImage,
  caseImageCreated,
  inquiryForm,
  getInquiry,
};
