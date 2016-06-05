// export default function dateHelpers() {
//   return true;
// }
import moment from 'npm:moment'

function formatDate(date, format) {
  return window.moment(date).format(format)
}

export {
  formatDate
}