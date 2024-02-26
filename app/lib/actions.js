"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    const endpoint = `${API_URL}/users/${id}`;
    try {
        const response = await axios.delete(endpoint)
        if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
        console.error("delete user failed:", error);
        throw error;
    }
    revalidatePath("/dashboard/users");
};


export const updateUser = async (formData) => {
    const { id, name, account, email, password, phone, role } = Object.fromEntries(formData);

    const updateFields = {
        name,
        account,
        email,
        password,
        phone,
        role
    };

    const endpoint = `${API_URL}/users/${id}`;
    try {
        const response = await axios.put(endpoint, updateFields)
        if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
        console.error("update user failed:", error);
        throw error;
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const updateAttendance = async (formData) => {
    const { id, attendance_date, time_in, time_out, attendance_type } = Object.fromEntries(formData);

    const updateFields = {
        attendance_date,
        time_in,
        time_out,
        attendance_type,
    };

    const endpoint = `${API_URL}/attendances/${id}`;
    try {
        const response = await axios.put(endpoint, updateFields)
        if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
        console.error("update attendance failed:", error);
        throw error;
    }
    revalidatePath("/dashboard/attendances");
    redirect("/dashboard/attendances");
};

export const deleteAttendance = async (formData) => {
    const { id } = Object.fromEntries(formData);
    const endpoint = `${API_URL}/attendances/${id}`;
    try {
        const response = await axios.delete(endpoint)
        if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
        console.error("delete attendance failed:", error);
        throw error;
    }
    revalidatePath("/dashboard/attendances");
};
