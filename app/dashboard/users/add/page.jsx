"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    account: '',
    password: '',
    email: '',
    phone: '',
    role: 'Employee',
  });
  const [error, setError] = useState('');
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/users`, formData);
      router.push('/dashboard/users');
    } catch (error) {
      console.error("create user failed", error);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.detail || 'Creating user failed';
        setError(errorMessage);
      } else {
        setError('Creating user failed. Please check your network connection and try again later.');
      }
    }
  };

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="name" value={formData.name} name="name" onChange={handleChange} required />
        <input type="text" placeholder="account" name="account" value={formData.account} onChange={handleChange} required />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input type="email" placeholder="email" value={formData.email} name="email" onChange={handleChange} />
        <input type="tel" placeholder="phone" value={formData.phone} name="phone" onChange={handleChange} />
        <select id="role" name="role" value={formData.role} onChange={handleChange}>
          <option value="Employee">Employee</option>
          <option value="HR">HR</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;