# Force-DOM-reflow-JS
### Overview and Install

Have you ever needed to force a dom reflow during transitions or other purposes? Do you find yourself frustrated with the cross browser solutions being too hackish and not-working-right? Then look no further. Simply insert the following 103-byte line of code into the top of your script to solve all your problems.

```Javascript
forceReflowJS=atob.call.bind(Object.getOwnPropertyDescriptor(HTMLElement.prototype,"offsetHeight").get)
```

Then, the code above create a `forceReflow` function that gets passed an Element and reflows the element. Example usage.

```Javascript
forceReflowJS=atob.call.bind(Object.getOwnPropertyDescriptor(HTMLElement.prototype,"offsetHeight").get)

forceReflowJS(document.documentElement); // reflows the whole page
```

### Compatibility
The code is guarenteed to work in all current browsers and in IE 9 and up.

