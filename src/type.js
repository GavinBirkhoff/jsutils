/**
 *
 * @param {*} target
 * @returns {String}
 */
export default function type(target) {
  let ret = typeof target
  const TYPE_MAP = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object String]": "string",
    "[object Date]": "date",
  }

  if (target === null) {
    return "null"
  } else if (ret == "object") {
    let str = Object.prototype.toString.call(target)
    return TYPE_MAP[str]
  } else {
    return ret
  }
}
