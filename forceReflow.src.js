// forces a complete reflow of a single element
window.forceReflow = Function.prototype.call.bind( // wrap it all up into an auto
  Object.getOwnPropertyDescriptor( // obtain the internal funciton that performs the reflow
    HTMLElement.prototype,
    "offsetHeight"
  ).get
);
