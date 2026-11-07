import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center text-primary mb-4">
          Contact Us
        </h1>

        <p className="text-center lead">
          Have questions or suggestions? We'd love to hear from you.
        </p>

        <div className="row mt-5">

          {/* Contact Form */}
          <div className="col-md-7">

            <div className="card shadow p-4">

              <h3>Send a Message</h3>

              <form>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Type your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

          {/* Contact Details */}
          <div className="col-md-5">

            <div className="card shadow p-4">

              <h3>Contact Information</h3>

              <hr />

              <p>
                📧 <strong>Email:</strong><br />
                support@fakenewsportal.com
              </p>

              <p>
                📞 <strong>Phone:</strong><br />
                +91 9876543210
              </p>

              <p>
                📍 <strong>Address:</strong><br />
                Gudlavalleru Engineering College<br />
                Andhra Pradesh, India
              </p>

              <p>
                🌐 <strong>Working Hours:</strong><br />
                Monday - Saturday<br />
                9:00 AM - 5:00 PM
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;