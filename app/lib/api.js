import ax from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUsers = async (q, page) => {
    const endpoint = `${API_URL}/users?user_name=${q}&page=${page}`;
    try {
      const response = await ax(endpoint);

      if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);

      return response.data
    } catch (error) {
      console.error("Fetching data failed:", error);
      throw error;
    }
};

export const fetchUser = async (id) => {
  const endpoint = `${API_URL}/users/${id}`;
  try {
    const response = await ax(endpoint);

    if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);

    return response.data
  } catch (error) {
    console.error("Fetching data failed:", error);
    throw error;
  }
};

export const fetchAttendances = async (q, page) => {
  const endpoint = `${API_URL}/attendances?attendance_type=${q}&page=${page}`;
  try {
    const response = await ax(endpoint);

    if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);

    return response.data
  } catch (error) {
    console.error("Fetching data failed:", error);
    throw error;
  }
};
