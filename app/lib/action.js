"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    const endpoint = `${API_URL}/users/${id}`;
    try {
        const response = await ax.delete(endpoint)
        if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
        console.error("delete user failed:", error);
        throw error;
    }
    revalidatePath("/dashboard/users");
};