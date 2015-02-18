# OpenTok Token Encoder

[![Build Status](https://travis-ci.org/opentok/token-encoder.png)](https://travis-ci.org/opentok/token-encoder)

Generates tokens for `X-TB-TOKEN-AUTH` header when using [OpenTok REST API](https://tokbox.com/opentok/api/).

## Installation

```
npm install --save opentok-token
```

## Usage

**WARNING:** This module does not check for the validity of the data being encoded into the token.
It doesn't know about the OpenTok REST API semantics, and you can encode data that doesn't result in
a valid token. Its merely a utility. Use the [OpenTok Node Server
SDK](https://github.com/opentok/opentok-node) for a more complete module.

### Generating a token

```javascript
var tokenEncoder = require('opentok-token');

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

var token = tokenEncoder(tokenData, apiKey, apiSecret);
```
**NOTE:** The API key, secret, and session ID above are not real.
