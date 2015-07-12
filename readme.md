# on-everything

> Catch every event an [EventEmitter](https://nodejs.org/api/events.html) publishes.

## Use

```sh
$ npm install --save on-everything
```
```js
var onEverything = require('on-everything');
```

## Example

```js
var onEverything = require('on-everything');
var request = require('request');

onEverything(request('http://yahoo.com'), function (eventName) {
  console.log(eventName);
});
```
```sh
$ node ./
request
socket
redirect
request
socket
response
complete
end
```

## ee = onEverything(ee, onEvent);


### ee

Type: [`EventEmitter`](https://nodejs.org/api/events.html)

This is returned from the function to allow chaining.


### onEvent(eventName, [...])

Type: `Function`

Called on every emitted event.

#### eventName

Name of the event emitted.

#### ...

The original arguments passed to the event.


## Related

- [stream-forward](https://github.com/stephenplusplus/stream-forward)
