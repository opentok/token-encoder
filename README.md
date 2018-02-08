# A OpenTok Token Encoder Fork For White url token, Thank OpenTok Token.

## What is different?

- use url safe base64 encode for url query params
- add url encode tester

## Installation

```
npm install --save white-token-urlsafe
```

## Usage

**WARNING:** This module does not check for the validity of the data being encoded into the token.
It doesn't know about the OpenTok REST API semantics, and you can encode data that doesn't result in
a valid token. Its merely a utility. Use the [OpenTok Node Server
SDK](https://github.com/opentok/opentok-node) for a more complete module.

### Generating a token

```javascript
var encodeToken = require('white-token-urlsafe');

var tokenData = {
  session_id: 'SESSIONID',
  create_time: 1424221013,
  nonce: 50885,
  role: 'moderator',
  expire_time: 1424307413,
  connection_data: '{"name":"value"}'
};
var apiKey = 'APIKEY';
var apiSecret = 'APISECRET'

var token = encodeToken(tokenData, apiKey, apiSecret);
```
**NOTE:** The API key, secret, and session ID above are not real.


### Default values

If you do not specify certain properties of the `tokenData` parameter, defaults will be applied for
you.

| Property      | Type                                | Default                     |
|---------------|-------------------------------------|-----------------------------|
| `create_time` | unix timestamp in seconds (integer) | now                         |
| `expire_time` | unix timestamp in seconds (integer) | now + 1 day                 |
| `role`        | string                              | 'publisher'                 |
| `nonce`       | number                              | unique random number        |

