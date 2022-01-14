const env = <const>{
  authKey: process.env.REACT_APP_AUTH_API_KEY || '',
  apiUrl: process.env.REACT_APP_API_URL || '',
};

Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    console.error(`Missing ${key} env variable.`);
  }
});

export default env;
