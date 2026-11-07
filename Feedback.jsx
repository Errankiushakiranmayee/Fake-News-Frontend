import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedback",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      alert("Error submitting feedback");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center">
          Feedback
        </h1>

        <form
          className="card shadow p-4 mt-4"
          onSubmit={handleSubmit}
        >

          <label>Name</label>

          <input
            type="text"
            name="name"
            className="form-control mb-3"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Your Feedback</label>

          <textarea
            rows="5"
            name="message"
            className="form-control mb-3"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-success"
          >
            Submit Feedback
          </button>

        </form>

      </div>

      <Footer />
    </>
  );
}

export default Feedback;