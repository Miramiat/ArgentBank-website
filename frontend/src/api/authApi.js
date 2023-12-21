// authApi.js

export const apiUrl = 'http://localhost:3001'; 

export const login = async (username, password) => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
};

