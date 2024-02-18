"use client"
import { fetchUsers } from "@/app/lib/api";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const data = await fetchUsers(q, page);
  const count = data.total_count
  const users = data.data

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
      alert('user already deleted');
      window.location.reload();
    } catch (error) {
      console.error('Delete user failed', error);
      alert('Delete user failed');
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.created_at?.toString().slice(0, 10)}</td>
              <td>{user.isAdmin ? "Admin" : "Employee"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                    <button onClick={() => deleteUser(user.id)} className={`${styles.button} ${styles.delete}`}>
                    Delete
                    </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;