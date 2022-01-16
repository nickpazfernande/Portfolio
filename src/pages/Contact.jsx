import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [msj, setMsj] = useState("");

  const changeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const changeEmail = (e) => {
    const value = e.target.value;
    setMail(value);
  };

  const changeTel = (e) => {
    const value = e.target.value;
    setTel(value);
  };

  const changeMsj = (e) => {
    const value = e.target.value;
    setMsj(value);
  };

  const checkInfo = (e) => {
    e.preventDefault();
    document.getElementById("notify").className = "notify";

    if (name.length == 0) {
      document.getElementById("notify").textContent =
        "*Ha dejado uno o más campos vacíos.";
    } else if (mail.length == 0) {
      document.getElementById("notify").textContent =
        "*Ha dejado uno o más campos vacíos.";
    } else if (tel.length == 0) {
      document.getElementById("notify").textContent =
        "*Su telefono debe de ser mayor a 3 caracteres.";
    } else if (msj.length == 0) {
      document.getElementById("notify").textContent =
        "*Su mensaje debe de ser mayor a 3 caracteres.";
    } else {
      sendEmail(e);
      document.getElementById("notify").className = "notify-success";
      document.getElementById("notify").textContent =
        "*Mensaje enviado correctamente.";
    }
  };
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_47syxgc",
        "template_ftp3izf",
        e.target,
        "user_727O3F0OvSPOgyPs6UZ7x"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container contact-form  rounded-3 animate__animated animate__fadeInLeft">
      <form onSubmit={checkInfo} className="form">
        <h3>Escribe un mensaje</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                id="input-name"
                name="user_name"
                className="form-control"
                placeholder="Nombre *"
                onChange={changeName}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtEmail"
                className="form-control"
                placeholder="Email *"
                onChange={changeEmail}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtPhone"
                className="form-control "
                placeholder="Número de telefono"
                onChange={changeTel}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Tu mensaje... *"
                onChange={changeMsj}
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact "
                value="Enviar mensaje"
              />
              <br />
              <small className="notify" id="notify"></small>
            </div>
          </div>
          <small className="text-white mt-3 text-center">
            *Este mensaje será enviado directamente a mi e-mail
            (contacto@nick.com.uy) y me pondré en contacto contigo lo más pronto
            posible.
          </small>
        </div>
      </form>
    </div>
  );
};

export default Contact;
