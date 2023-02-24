const environment = {
  local: {
    API_URL: "http://localhost:4000/", // local env URL
    BASE_PATH: "",
  },
  dev: {
    API_URL: "",
    BASE_PATH: "",
  },
  production: {
    API_URL: "", // here put production env URL.
  },
};

const config = environment[process.env.REACT_APP_STAGE] || environment.local;

export default config;
