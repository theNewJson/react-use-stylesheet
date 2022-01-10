import { useEffect } from 'react';

const useCustomStyle = (url?: string) => {
  useEffect(() => {
    console.log('234')
    if (url) {
      const link = document.createElement('link');

      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
    return undefined;
  }, [url]);
};

export default useCustomStyle;
