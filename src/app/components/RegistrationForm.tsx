// components/RegistrationForm.tsx
'use client';
import { useState } from 'react';
import { Customer } from '../types/types';


interface Props {
  onRegister: (newCustomer: Customer) => void;
}

const RegistrationForm = ({ onRegister }: Props) => {
  const [formData, setFormData] = useState<Customer>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(formData);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 space-y-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center">Register</h2>
      <div className="form-control">
        <label htmlFor="name" className="label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email" className="label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">Register</button>
    </form>
  );
};

export default RegistrationForm;
