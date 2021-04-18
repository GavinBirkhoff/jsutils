# jsutils

💗 JavaScript tool function collection, let developers quickly realize the function.

## API Reference

- [debounce](#debounce)
- [deepClone](#deepClone)
- [getTextPixelWith](#getTextPixelWith)
- [offsetFrom](#offsetFrom)
- [setCssProps](#setCssProps)
- [throttle](#throttle)

### debounce

```js
import { debounce } from "@gavinbirkhoff/jsutils"
debounce(func, wait, immediate)
```

debounce （防抖），当一定时间内没有触发再这个事件时，才真正去触发事件。

### throttle

```js
import { throttle } from "@gavinbirkhoff/jsutils"
throttle(func, wait, type)
```

throttle（节流），当持续触发事件时，保证隔间时间触发一次事件。
type 1 time stamp, 2 timer

### listToTree

```js
listToTree(list, (pid = null))
```

将 list 数据根据祖父级 pid 转化成 tree 结构

### treeToArray

```js
treeToArray(tree, (newArr = []))
```

将带有以 children 为展开的树形数据转换成一维数组

### getTextPixelWith

```js
getTextPixelWith(text, font)
```

获取文本宽度

### offsetFrom

```js
offsetFrom(ele)
```

获取元素距离 body 的 offset

### setCssProps

```js
setCssProps(element, props)
```

给元素设置 props 属性
