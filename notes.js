The microtask queue is, then, processed multiple times per iteration of the event loop, including after handling events and other callbacks.

Second, if a microtask adds more microtasks to the queue by calling queueMicrotask(), those newly-added microtasks execute before the next task is run.

That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added

The main reason to use microtasks is that: to ensure consistent ordering of tasks, even when results or data is available synchronously, 
  but while simultaneously reducing the risk of user-discernible delays in operations.


customElement.prototype.getData = (url) => {
  if (this.cache[url]) {
    queueMicrotask(() => {
      this.data = this.cache[url];
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((result) => result.arrayBuffer())
      .then((data) => {
        this.cache[url] = data;
        this.data = data;
        this.dispatchEvent(new Event("load"));
      });
  }
};

cosnt myworker = new worker('x.js');
myworker.postmessage();
myworker.onmessage();
myworker.terminate();
