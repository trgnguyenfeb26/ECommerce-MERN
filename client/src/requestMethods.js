import axios from "axios";
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzRmNWU0MGZhZWNlMzQyYzdmOTVmMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzI2NTgyMCwiZXhwIjoxNjU3NTI1MDIwfQ.ObJKRzml2UoqSuf-FXO-EPDgriw9Fe_PYNKmbTEZb6c";
const BASE_URL = "http://localhost:5000/api/";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});