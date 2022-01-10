'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var useCustomStyle = function useCustomStyle(url) {
  react.useEffect(function () {
    console.log('234');

    if (url) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      document.head.appendChild(link);
      return function () {
        document.head.removeChild(link);
      };
    }

    return undefined;
  }, [url]);
};

exports["default"] = useCustomStyle;
