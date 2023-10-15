import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://api.portafolio.test"; //TODO cambiar por env