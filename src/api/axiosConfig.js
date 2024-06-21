import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8082',
    headers: {
        baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
      //  headers: {"ngrok-skip-browser-warning": "true"}" // Allow requests from your React app's domain
    }
});
