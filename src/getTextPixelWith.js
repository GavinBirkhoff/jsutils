/**
 *
 * @param {String} text
 * @param {Object} font
 * @returns {Number}
 */
export default function getTextPixelWith(text, font) {
  let { fontStyle, fontVariant, fontWeight, fontSize, fontFamily } = font
  console.log(fontVariant)
  let ctx = document.createElement("canvas").getContext("2d")
  ctx.font = `${fontStyle !== undefined ? fontStyle : ""} ${fontVariant !== undefined ? fontVariant : ""} ${
    fontWeight !== undefined ? fontWeight : ""
  } ${fontSize} "${fontFamily}"`.trimStart()
  let dimension = ctx.measureText(text)
  return dimension.width
}
