import { useEffect, useState } from 'react';

export const useInitAgentConfig = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟 5 秒的加载时间
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading };
}; 