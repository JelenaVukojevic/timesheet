import moment from 'moment'

const urlDate = window.location.pathname.substr(1);
export const date = (urlDate) ? 
                moment(urlDate, 'DD-MM-YYYY').format('DD-MM-YYYY') : 
                moment().format('DD-MM-YYYY');