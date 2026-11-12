import { useState } from 'react';
import './App.css';

const PROVINCES = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
];

const initialForm = {
  email: '',
  fullName: '',
  address: '',
  address2: '',
  city: '',
  province: '',
  postalCode: '',
  agree: false,
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div className="container my-4">
      <div className="form-box p-3">
        <h1 className="text-center mb-3">Data Entry Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="fullName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="1234 Main St"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address2" className="form-label">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="address2"
              name="address2"
              placeholder="Apartment, studio, or floor"
              value={form.address2}
              onChange={handleChange}
            />
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="province" className="form-label">Province</label>
              <select
                className="form-select"
                id="province"
                name="province"
                value={form.province}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                {PROVINCES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="postalCode" className="form-label">Postal Code</label>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-check d-flex justify-content-center gap-2 mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="agree"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree" className="form-check-label">
              Agree Terms &amp; Condition?
            </label>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="output mt-4">
          <p className="label">Email:</p>
          <p>{submitted.email}</p>
          <p className="label">Full Name:</p>
          <p>{submitted.fullName}</p>
          <p className="label">Address:</p>
          <p>
            {submitted.address}
            {submitted.address2 && `, ${submitted.address2}`}
          </p>
          <p className="label">City:</p>
          <p>{submitted.city}</p>
          <p className="label">Province:</p>
          <p>{submitted.province}</p>
          <p className="label">Postal Code:</p>
          <p>{submitted.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
