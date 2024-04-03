// components/Form.js
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    hobbies: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 rounded-md" />
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block">Phone Number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full border-gray-300 rounded-md" />
      </div>
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md" />
      </div>
      <div>
        <label htmlFor="hobbies" className="block">Hobbies</label>
        <input type="text" id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} className="w-full border-gray-300 rounded-md" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
    </form>
  );
};

export default Form;
