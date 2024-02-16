const API_URL = process.env.ATTENDANCE_SYSTEM_API_URL;

async function fetchAPI(endpoint, { method = 'GET', body = null, headers = {} } = {}) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;
    
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };
  
    if (body) {
      config.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Network error: ${error.message}`);
    }
}

export const fetchUsers = async (q, page) => {
    const endpoint = `${API_URL}/users`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetching data failed:", error);
      throw error;
    }
};

export const fetchAttendances = async (q, page) => {
    const endpoint = `${API_URL}/attendances`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetching data failed:", error);
      throw error;
    }
};
