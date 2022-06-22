import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_6zo072k",
      "template_youtube0711",
      e.target,
      "fzWysFvJqNhcYddql"
    );

    e.target.reset();
  }

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                data-testid="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                style={{
                  marginTop: "15px",
                  width: "300px",
                  borderRadius: "10px",
                  height: "50px",
                  fontWeight: "30px",
                }}
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                data-testid="email"
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                style={{
                  marginTop: "15px",
                  width: "300px",
                  borderRadius: "10px",
                  fontWeight: "30px",
                  height: "50px",
                }}
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                data-testid="subject"
                className="form-control"
                placeholder="Subject"
                name="subject"
                style={{
                  marginTop: "15px",
                  width: "300px",
                  borderRadius: "10px",
                  height: "50px",
                  fontWeight: "30px",
                }}
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                data-testid="message"
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                style={{
                  marginTop: "15px",
                  width: "600px",
                  borderRadius: "10px",
                  fontWeight: "30px",
                }}
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
