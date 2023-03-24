// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hola.tokenstudio@gmail.com',
    pass: '23324123Ff***'
  }
});

export default function handler(req, res) {
  if (req.method === 'POST') {
    sendMailToVisit(req, res);
  }
}

const sendMailToVisit = () => {
  const message = {
      from: "ejemplo@microlab.ec",
      to: 'hola@tokenstudio@gmail.com',
      subject: "Ejemplo de asunto de correo",
      text: "Plaintext version of the message",
      html: "<p>Link para entrar a la página de microlab: <br> <a href='https://microlab.ec'></a></p>"
  };
  transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log("Error enviando email")
        console.log(error.message)
    } else {
        console.log("Email enviado")
    }
})
};
