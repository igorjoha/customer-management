// components/CustomerList.tsx
import { Customer } from '../types/types';

interface Props {
  customers: Customer[];
}

const CustomerList = ({ customers }: Props) => {
  return (
    <div className="overflow-x-auto w-full mt-6">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
