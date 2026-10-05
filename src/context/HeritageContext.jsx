import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { heritageData } from "../data/heritageData";

const HeritageContext = createContext(null);

export function HeritageProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("heritage_favorites")) || [];
    } catch {
      return [];
    }
  });

  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("heritage_progress")) || {};
    } catch {
      return {};
    }
  });

  const [interest, setInterest] = useState(() => localStorage.getItem("heritage_interest") || "");
  const [level, setLevel] = useState(() => localStorage.getItem("heritage_level") || "Beginner");

  useEffect(() => {
    try {
      localStorage.setItem("heritage_favorites", JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem("heritage_progress", JSON.stringify(progress));
    } catch (e) {
      console.error(e);
    }
  }, [progress]);

  useEffect(() => {
    if (interest) {
      localStorage.setItem("heritage_interest", interest);
    } else {
      localStorage.removeItem("heritage_interest");
    }
  }, [interest]);

  useEffect(() => {
    localStorage.setItem("heritage_level", level);
  }, [level]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const setItemProgress = (id, value) => {
    setProgress((prev) => ({ ...prev, [id]: Math.max(0, Math.min(100, value)) }));
  };

  const overallProgress = useMemo(() => {
    if (!heritageData || heritageData.length === 0) return 0;
    const values = heritageData.map((x) => progress[x.id] || 0);
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  }, [progress]);

  return (
    <HeritageContext.Provider
      value={{
        favorites,
        toggleFavorite,
        progress,
        setItemProgress,
        overallProgress,
        interest,
        setInterest,
        level,
        setLevel,
      }}
    >
      {children}
    </HeritageContext.Provider>
  );
}

export const useHeritage = () => useContext(HeritageContext);