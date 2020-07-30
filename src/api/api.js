import axios from 'axios'

const instance =  axios.create({
  baseURL: `http://localhost:8080/timesheet-api/timesheet.php`
});

export default instance;