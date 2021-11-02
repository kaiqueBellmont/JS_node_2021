import axios from 'course_contents/curso-js/REACT/consumirapi/src/services/axios';

export default axios.create({
  baseURL: 'http://localhost:3001',
});
