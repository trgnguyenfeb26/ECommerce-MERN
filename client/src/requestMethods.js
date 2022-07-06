import axios from "axios";
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzRmNWU0MGZhZWNlMzQyYzdmOTVmMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzA5NTA3NywiZXhwIjoxNjU3MzU0Mjc3fQ.pm-gtCf1cVdOX_viynWvmJR9a2FqP_DShdMANHGxR7M"
const BASE_URL = "http://localhost:5000/api/";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});