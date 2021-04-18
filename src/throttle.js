/**
 * @desc throttle function
 * @param func function
 * @param wait Delay in milliseconds
 * @param type 1 time stamp, 2 timer
 */
export default function (func, wait, type) {
  let previous = 0
  let timeout

  return function () {
    let context = this
    let args = arguments
    if (type === 1) {
      let now = Date.now()

      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}
