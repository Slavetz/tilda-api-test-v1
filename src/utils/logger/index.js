/* eslint-disable prefer-rest-params */

function error() {
  console.log(arguments);
}

function info() {
  console.log(arguments);
}

module.exports = {
  error,
  info,
};
