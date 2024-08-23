import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - TextNode`;
    }, [title]);

  return null;
}