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
import { debounce } from "briefscript"
debounce(func, wait, immediate)
```

func is callback as wait time end

### throttle

```js
throttle(func, wait, type)
```

func is callback as wait time interval.
type 1 time stamp, 2 timer
