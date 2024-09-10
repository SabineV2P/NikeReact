function Contact() {
  return (
    <>
      <section id="contact" className="mt-5">
        <div className="container contact-form">
          <form method="post">
            <h3 className="mb-3">Drop Us a Message</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="mb-2 form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    className="mb-2 form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    className="mb-2 form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    className="mb-2 btn btn-primary"
                    value="Send Message"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Your Message *"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
