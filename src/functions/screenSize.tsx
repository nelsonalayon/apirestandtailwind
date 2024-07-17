import { useState, useEffect } from 'react';

function useResize() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleuseResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('useResize', handleuseResize);

    return () => {
      window.removeEventListener('useResize', handleuseResize);
    };
  }, []);

  return windowWidth ;
}

export default useResize;