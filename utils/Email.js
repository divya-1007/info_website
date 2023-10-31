const fs = require("fs");
const path = require("path");
const handlebar = require("handlebars");
const nodemailer = require("nodemailer");
// qxdujecsoudvqznj
const AVAILABLETEMPLATES = {
  CONTACT_INFORMATION: "contact-information",
  ENQUIRE_FLEXI: "enquire-flexi",
  AI_Congratulations:"ai-congratulations",
  AI_Development_Services:"ai-development-service",
};

class Email {
  constructor(template = "") {
    this.body = "";
    this.subject = "";
    this.cc = [];
    if (template) {
      this.setTemplate(template);
    }
  }

  setTemplate(template) {
    if (!Object.values(AVAILABLETEMPLATES).includes(template)) {
      throw new Error("Invalid template");
    }

    this.template = template;
    switch (template) {
      case AVAILABLETEMPLATES.CONTACT_INFORMATION:
        this.subject = "Contact Us Successfully ";
        break;
      case AVAILABLETEMPLATES.ENQUIRE_FLEXI:
        this.subject = "Enquire Flexi Successfully ";
        break;

      default:
        break;
    }
  }
  setBody(data) {
    if (!this.template) {
      throw new Error("Template not set");
    }
   
    if(data.type =='Enquire'){
      const fileBody = fs
      .readFileSync(
        path.join(__dirname, "..", `views/templates/${this.template}.hbs`)
      )
      .toString();
      const template = handlebar.compile(fileBody);

      this.body = template(data);

    }else{
    const fileBodys = fs
      .readFileSync(
        path.join(__dirname, "..", `views/templates/${this.template}.hbs`)
      )
      .toString();
      const template = handlebar.compile(fileBodys);

      this.body = template(data);

    }

   
  }

  setRawBody(body) {
    this.body = body;
  }

  setSubject(subject) {
    this.subject = subject;
  }

  setCC(email) {
    this.cc = email;
  }

  async send(email) {
 
    if (!email) {
      throw new Error("Email not set");
    }
    if (!this.body || !this.subject) {
      throw new Error("Body or subject not set");
    }


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'divyachourasiya.infograins@gmail.com', 
        pass: 'qxdujecsoudvqznj',
      },
    });

    const info = await transporter.sendMail({
      from: `<divyachourasiya.infograins@gmail.com>`,
      to: email,
      subject:this.subject,
      html: this.body,
    });
    
    return info;
  }

  static sendEmail(template, data, email, cc = []) {
    
    const emailClient = new Email(template);
    emailClient.setBody(data);
    emailClient.setSubject(template)
    emailClient.setCC(cc);
    return emailClient.send(email);
  }
}
module.exports = {
  Email,
  AVAILABLETEMPLATES
}