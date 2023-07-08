The microtask queue is, then, processed multiple times per iteration of the event loop, including after handling events and other callbacks.

Second, if a microtask adds more microtasks to the queue by calling queueMicrotask(), those newly-added microtasks execute before the next task is run.

That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added



cosnt myworker = new worker('x.js');
myworker.postmessage();
myworker.onmessage();
myworker.terminate();
