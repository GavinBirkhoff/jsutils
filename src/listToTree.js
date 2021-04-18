/**
 * @description:
 * @param {Array} list
 * @param {String} pid
 * @return {Array}
 */
export default function listToTree(list, pid = null) {
  return list
    .filter(item => item.pid === pid)
    .map(item => ({
      ...item,
      children: listToTree(list, item.id),
    }))
}
