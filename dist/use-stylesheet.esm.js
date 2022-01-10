import { useEffect } from 'react';

var useCustomStyle = function useCustomStyle(url) {
  useEffect(function () {
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

export { useCustomStyle as default };
