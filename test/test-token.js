var test = require('tap').test;
var tokenEncoder = require('../index.js');

test('exports a single function', function(t) {
  t.type(tokenEncoder, 'function');
  t.end();
});

test('encodes a token', function(t) {
  // fixtures
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

  var expectedToken = 'T1==cGFydG5lcl9pZD0xMjM0NTYmc2lnPWRmOTRhNjQ1NTlhY2MwNjFkN2EzNzUyYTZmYzY5NDkzZTkzOGMxOTE6c2Vzc2lvbl9pZD0xX01YNHhNak0wTlRaLWZsTmhkQ0JOWVhJZ01UVWdNVFE2TkRJNk1qTWdVRVJVSURJd01UUi1NQzQwT1RBeE16QXlOWDQmY3JlYXRlX3RpbWU9MTQyNDIyMTAxMyZub25jZT0wLjM5NDI2MDk4ODEwNTA4ODUmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTQyNDMwNzQxMyZjb25uZWN0aW9uX2RhdGE9JTdCJTIybmFtZSUyMiUzQSUyMnZhbHVlJTIyJTdE';

  var actualToken = tokenEncoder(tokenData, apiKey, apiSecret);

  t.equal(actualToken, expectedToken);
  t.end();
});
