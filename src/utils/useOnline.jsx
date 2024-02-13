import { useEffect, useState } from "react";

const useOnline = () => {
  const [isLogged, setLogged] = useState(true);
  const HandleOnfline = () => {
    setLogged(true);
  };
  const HandleOffline = () => {
    setLogged(false);
  };

  useEffect(() => {
    window.addEventListener("online", HandleOnfline);
    window.addEventListener("offline", HandleOffline);

    return () => {
      window.removeEventListener("online", HandleOnfline);
      window.removeEventListener("offline", HandleOffline);
    };
  }, []);

  return isLogged;
};

export default useOnline;
