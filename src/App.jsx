import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    phone: "",
    email: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(formData.age) <= 16) {
      alert("Age must be greater than 16.");
      return;
    }

    const phoneNumber = "919160427763";
    const message = `Hello! Here are my details:

Name: ${formData.name}
DOB: ${formData.dob}
Age: ${formData.age}
Phone: ${formData.phone}
Email: ${formData.email}
Height: ${formData.height} cm
Weight: ${formData.weight} kg`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      {/* Top Nav */}
      <nav className="w-full bg-blue-600 text-white py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">Enquiry - Greekgod Squad</h1>
        </div>
      </nav>

      {/* Form Section */}
      <div className="flex justify-center items-center py-10 px-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-8 sm:p-10 border border-blue-100">
          <h2 className="text-3xl font-bold text-center mb-1">Submit Your Info</h2>
          <p className="text-sm text-center text-blue-700 mb-6">
            Your details will be sent directly to our WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full p-2 mt-1 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="w-full p-2 mt-1 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Age (must be over 16)</label>
              <input
                type="number"
                name="age"
                placeholder="17"
                className="w-full p-2 mt-1 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91XXXXXXXXXX"
                className="w-full p-2 mt-1 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                className="w-full p-2 mt-1 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  placeholder="170"
                  className="w-full p-2 mt-1 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  placeholder="65"
                  className="w-full p-2 mt-1 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition font-medium text-lg mt-4"
            >
              Send to WhatsApp 💬
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
