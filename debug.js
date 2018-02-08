/**
 * Created by buhe on 2018/2/8.
 */
var encodeToken = require('.');
var helpers = require('./helpers');

// the API Key and Secret are fake
var apiKey = '123456';
var apiSecret = '1234567890abcdef1234567890abcdef1234567890';

var tokenData = {
  // this is a fake session ID made specifically to work with the fake API Key and Secret
  session_id: '1_MX4xMjM0NTZ-flNhdCBNYXIgMTUgMTQ6NDI6MjMgUERUIDIwMTR-MC40OTAxMzAyNX4',
  create_time: 1424221013,
  nonce: 0.3942609881050885,
  role: 'moderator',
  expire_time: 1424307413,
  connection_data: '{"name":"value"}'
};

var actualToken = encodeToken(tokenData, apiKey, apiSecret);

console.log(actualToken);

var token = helpers.decodeToken(actualToken);

console.log(token);
