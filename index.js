var crypto = require('crypto');
var querystring = require('querystring');

/**
 * @constant {string}
 */
var TOKEN_SENTINEL = 'T1==';

/**
 * @typedef TokenData
 * @type {object}
 * @property {string} session_id An OpenTok Session ID
 * @property {number} create_time Creation time of token as unix timestamp (now)
 * @property {number} expire_time Expiration time of token as unix timestamp
 * @property {number} nonce Arbitrary number used only once in a cryptographic communication
 * @property {string} role "publisher" or "subscriber" "moderator"
 * @property {string} connection_data Arbitrary data to be made available in clients on the OpenTok Connection
 */

/**
 * Encodes data for use as a token that can be used as the X-TB-TOKEN-AUTH header value in OpenTok REST APIs
 *
 * @param {TokenData} tokenData
 * @param {string} apiKey An OpenTok API Key
 * @param {string} apiSecret An OpenTok API Secret
 *
 * @returns {string} token
 */
var encodeToken = function(tokenData, apiKey, apiSecret) {
  var dataString = querystring.stringify(tokenData),
      sig = signString(dataString, apiSecret),
      decoded = new Buffer("partner_id="+apiKey+"&sig="+sig+":"+dataString, 'utf8');
  return TOKEN_SENTINEL + decoded.toString('base64');
};

var signString = function(unsigned, key) {
  var hmac = crypto.createHmac('sha1', key);
  hmac.update(unsigned);
  return hmac.digest('hex');
};


module.exports = encodeToken;
