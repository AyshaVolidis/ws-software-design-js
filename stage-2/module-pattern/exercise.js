/*
 * Exercise: Create some modules!
 *
 * When you think you have finished, run the command:
 *   npm run s2.modules
 * This will run a series of tests which should all pass.
 */
"use strict";

/*
 * Create a single module (using an IIFE) which contains functionality to parse
 * URLs.
 *
 * We have started you off with the basic structure.
 *
 *     https    ://   www.example.com  /   hello  ?  foo=1&bar=2
 * |          |     |                |   |      |  |             |
 * | protocol |     |    domain      |   | path |  | querystring |
 */
var UrlParser = (function () {
  return {
    protocol: function (url) {
      return url.split(":")[0];
    },

    domain: function (url) {
      return url.split("/")[2];
    },

    path: function (url) {
      const parts = url.split("/");
      return parts[3] ? parts[3].split("?")[0] : "";
    },

    querystring: function (url) {
      const index = url.indexOf("?");
      return index !== -1 ? url.slice(index + 1) : "";
    },
  };
})();

/*
 * Create a module that can support multiple instances (like in our example).
 * The module should be a function with several additional methods attached as
 * attributes.
 *
 * Example:
 * var exampleBuilder = createUrlBuilder('https://example.com');
 *
 * var url = exampleBuilder({ query: { foo: 1, bar: 2 }, path: 'hello' });
 *
 * console.log(url); // https://example.com/hello?foo=1&bar=2
 *
 * exampleBuilder.
 */
var createUrlBuilder = function (host) {
  // fill in ...

  var builder = function (parts) {
    var url = host;
    if (parts.path) {
      url += `/${parts.path}`;
    }

    if (parts.query) {
      var queryParts = [];

      for (var key in parts.query) {
        if (parts.query.hasOwnProperty(key)) {
          queryParts.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(parts.query[key])
          );
        }
      }

      if (queryParts.length > 0) {
        url += "?" + queryParts.join("&");
      }
    }
    return url;
  };

  builder.path = function (path) {
    return `${host}/${path}`;
  };

  builder.query = function (query) {
    var queryParts = [];

    for (var key in query) {
      if (query.hasOwnProperty(key)) {
        queryParts.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
        );
      }
    }

    return queryParts.length > 0 ? `${host}?${queryParts.join("&")}` : host;
  };

  return builder;
};

module.exports = {
  UrlParser,
  createUrlBuilder,
};
