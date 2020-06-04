# OpenTok Token Encoder

<img src="https://assets.tokbox.com/img/vonage/Vonage_VideoAPI_black.svg" height="48px" alt="Tokbox is now known as Vonage" />

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
var encodeToken = require("opentok-token");

var tokenData = {
  session_id: "SESSIONID",
  create_time: 1424221013,
  nonce: 50885,
  role: "moderator",
  expire_time: 1424307413,
  connection_data: '{"name":"value"}',
};
var apiKey = "APIKEY";
var apiSecret = "APISECRET";

var token = encodeToken(tokenData, apiKey, apiSecret);
```

**NOTE:** The API key, secret, and session ID above are not real.

### Default values

If you do not specify certain properties of the `tokenData` parameter, defaults will be applied for
you.

| Property      | Type                                | Default              |
| ------------- | ----------------------------------- | -------------------- |
| `create_time` | unix timestamp in seconds (integer) | now                  |
| `expire_time` | unix timestamp in seconds (integer) | now + 1 day          |
| `role`        | string                              | 'publisher'          |
| `nonce`       | number                              | unique random number |

## Development and Contributing

Interested in contributing? We :heart: pull requests! See the
[Contribution](CONTRIBUTING.md) guidelines.

## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

- Open an issue on this repository
- See <https://support.tokbox.com/> for support options
- Tweet at us! We're [@VonageDev](https://twitter.com/VonageDev) on Twitter
- Or [join the Vonage Developer Community Slack](https://developer.nexmo.com/community/slack)
