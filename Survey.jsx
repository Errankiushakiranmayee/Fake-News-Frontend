import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Survey() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    village: "",
    heardFakeNews: "Yes",
    verifyBeforeSharing: "Always",
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
        "http://localhost:5000/api/surveys",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        age: "",
        village: "",
        heardFakeNews: "Yes",
        verifyBeforeSharing: "Always",
      });
    } catch (error) {
      alert("Error submitting survey");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1 className="text-center">
          Community Survey
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

          <label>Age</label>
          <input
            type="number"
            name="age"
            className="form-control mb-3"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label>Village / City</label>
          <input
            type="text"
            name="village"
            className="form-control mb-3"
            value={formData.village}
            onChange={handleChange}
            required
          />

          <label>Have you heard about Fake News?</label>

          <select
            name="heardFakeNews"
            className="form-control mb-3"
            value={formData.heardFakeNews}
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <label>Do you verify news before sharing?</label>

          <select
            name="verifyBeforeSharing"
            className="form-control mb-3"
            value={formData.verifyBeforeSharing}
            onChange={handleChange}
          >
            <option>Always</option>
            <option>Sometimes</option>
            <option>Never</option>
          </select>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit Survey
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Survey;