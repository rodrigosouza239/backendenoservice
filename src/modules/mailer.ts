import nodemailer from "nodemailer";

//multer api
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3269e52c658db7",
    pass: "243fdbc6adba5b"
  },
});

export default transport;
