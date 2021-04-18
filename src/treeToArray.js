/**
 * @description:
 * @param {Array} tree
 * @param {*} newArr
 * @return {Array}
 */
export default function treeToArray(tree, newArr = []) {
  tree.forEach(item => {
    const { children } = item
    if (children) {
      delete item.children

      if (children.length) {
        newArr.push(item)
        return treeToArray(children, newArr)
      }
    }
    newArr.push(item)
  })
  return newArr
}
