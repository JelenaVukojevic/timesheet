import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:8080/timesheet-backend/timesheet.php`,
  headers: {'Access-Control-Allow-Origin': '*'},
});