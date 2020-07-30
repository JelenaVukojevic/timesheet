import axios from 'axios'

const instance =  axios.create({
  baseURL: `http://localhost/timesheet-api/timesheet.php`
});

export default instance;