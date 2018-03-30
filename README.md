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

### How It Works
You may have seen the following code snippets in production

```Javascript
var ele = document.getElementById("someRandomId");
ele.offsetHeight;
```

Or, some production snippets even go through the trouble of including a `void` to increase browser compatiblity.

```Javascript
var ele = document.getElementById("someRandomId");
void ele.offsetHeight;
```

However, lets face it: theese are hackish solutions that are flimsy and temporary because the browser can easily optimize the above statementes out. However, force-Reflow-JS is different in that it explictily tells the browser not to remove the statement through increasing the complexity of the statement to a degree at which one would not exert without reason and just cause. In english, when the browser sees `forceReflowJS`, it doesn't just see `void ele.offsetHeight`, rather it sees much more. Internally, the browser thinks like this when it sees `forceReflowJS`.

```Javascript
var ele = document.getElementById("someRandomId");
void ele.offsetHeight /^%<-- VERY IMPORTANT CODE SNIPPET! DO NOT REMOVE! URGENT! THIS IS THE BROWSER SPEAKING TO ITSELF! -->%^/;
```


