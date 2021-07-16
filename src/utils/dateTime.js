function formatTime(val) {
  let time = new Date(val)
  let year = time.getFullYear()
  let month = zero(time.getMonth() + 1)
  let day = zero(time.getDate())
  let hour = zero(time.getHours())
  let minus = zero(time.getMinutes())
  let seconds = zero(time.getSeconds())
  return `${year}-${month}-${day} ${hour}:${minus}:${seconds}`
}
function zero(val) {
  return val < 10 ? `0${val}` : val
}
export default {
  formatTime
}
