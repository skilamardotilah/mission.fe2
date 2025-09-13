import { createContext, useContext, useState, useEffect } from 'react';

const WatchHistoryContext = createContext();

export const useWatchHistory = () => {
  const context = useContext(WatchHistoryContext);
  if (!context) {
    throw new Error('useWatchHistory must be used within a WatchHistoryProvider');
  }
  return context;
};

export const WatchHistoryProvider = ({ children }) => {
  const [watchHistory, setWatchHistory] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('watchHistory');
    if (savedHistory) {
      setWatchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save to localStorage whenever watchHistory changes
  useEffect(() => {
    localStorage.setItem('watchHistory', JSON.stringify(watchHistory));
  }, [watchHistory]);

  const addToWatchHistory = (item, type = 'film', progress = 0) => {
    const historyItem = {
      id: `${type}-${item.title || item.id || Date.now()}`,
      title: item.title,
      type: type,
      progress: progress,
      timestamp: Date.now(),
      poster: item.src || item.poster,
      description: item.description
    };

    setWatchHistory(prev => {
      // Remove existing item with same id
      const filtered = prev.filter(item => item.id !== historyItem.id);
      // Add new item at the beginning
      return [historyItem, ...filtered];
    });
  };

  const updateWatchProgress = (id, progress) => {
    setWatchHistory(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, progress: Math.min(progress, 100) }
          : item
      )
    );
  };

  const removeFromWatchHistory = (id) => {
    setWatchHistory(prev => prev.filter(item => item.id !== id));
  };

  const isInWatchHistory = (item, type = 'film') => {
    const id = `${type}-${item.title || item.id || ''}`;
    return watchHistory.some(historyItem => historyItem.id === id);
  };

  const getWatchProgress = (item, type = 'film') => {
    const id = `${type}-${item.title || item.id || ''}`;
    const historyItem = watchHistory.find(historyItem => historyItem.id === id);
    return historyItem ? historyItem.progress : 0;
  };

  const value = {
    watchHistory,
    addToWatchHistory,
    updateWatchProgress,
    removeFromWatchHistory,
    isInWatchHistory,
    getWatchProgress
  };

  return (
    <WatchHistoryContext.Provider value={value}>
      {children}
    </WatchHistoryContext.Provider>
  );
};
