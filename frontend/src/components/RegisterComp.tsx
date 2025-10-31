import React, { useState } from "react";

const RegisterComp: React.FC = () => {
  const [step, setStep] = useState<"register" | "loksewa">("register");
  const [fade, setFade] = useState(true);

  // Handle registration (first form)
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFade(false);
    setTimeout(() => {
      setStep("loksewa");
      setFade(true);
    }, 300);
  };

  // Handle Loksewa form submission
  const handleLoksewaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Loksewa applicant info submitted!");
    // Add navigation or success handling here
  };

  return (
    <div
      className={`w-full max-w-md bg-[#F5EFE6] p-10 rounded-2xl shadow-lg transition-all duration-500 ${
        fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {step === "register" ? (
        <>
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            Create Account
          </h2>

          <form className="space-y-5" onSubmit={handleRegisterSubmit}>
            {/* Username */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="input"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="input"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="input"
                required
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Date of Birth
              </label>
              <input type="date" className="input" required />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="input"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-cyan-500 rounded-lg hover:bg-cyan-400 font-bold transition-colors text-white"
            >
              Next
            </button>
          </form>

          <p className="mt-5 text-center text-black">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-400 hover:underline">
              Login
            </a>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            My Info
          </h2>

          <form className="space-y-5" onSubmit={handleLoksewaSubmit}>
            {/* Full Name (English) - Split */}
            <div>
              <label className="block mb-3 text-sm font-medium text-black">
                Full Name (English)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Middle Name"
                  className="input w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input w-full"
                  required
                />
              </div>
            </div>

            {/* Full Name (Nepali) - Split */}
            <div>
              <label className="block mb-3 text-sm font-medium text-black">
                Full Name (Nepali)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="पहिलो नाम"
                  className="input w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="बीचको नाम"
                  className="input w-full"
                />
                <input
                  type="text"
                  placeholder="थर"
                  className="input w-full"
                  required
                />
              </div>
            </div>

            {/* Citizenship Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Citizenship Number
              </label>
              <input
                type="text"
                placeholder="Enter citizenship number"
                className="input"
                required
              />
            </div>

            {/* Issuing District */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Issuing District
              </label>
              <input
                type="text"
                placeholder="Enter issuing district"
                className="input"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Gender
              </label>
              <select className="input" required>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Marital Status */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Marital Status
              </label>
              <select className="input" required>
                <option value="">Select marital status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Permanent Address
              </label>
              <input
                type="text"
                placeholder="Province, District, Municipality, Ward"
                className="input"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Temporary Address
              </label>
              <input
                type="text"
                placeholder="Province, District, Municipality, Ward"
                className="input"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="input"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="input"
                required
              />
            </div>

            <div className="flex justify-between pt-3">
              <button
                type="button"
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setStep("register");
                    setFade(true);
                  }, 300);
                }}
                className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-colors"
              >
                Back
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 font-bold transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterComp;
