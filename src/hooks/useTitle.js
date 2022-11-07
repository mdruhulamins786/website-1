import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - News`;
  }, [title]);
};

export default useTitle;
