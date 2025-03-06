// app/page.tsx
'use client';

import { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import CustomerList from '../components/CustomerList';
import { Customer } from '../types/types';

export default function Home() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const handleRegister = (newCustomer: Customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <RegistrationForm onRegister={handleRegister} />
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Customer Management</h2>
        <CustomerList customers={customers} />
      </div>
    </div>
  );
}
