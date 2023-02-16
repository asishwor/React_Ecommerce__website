import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useTitle(id: string | undefined) {
  useEffect(() => {
    if (id) {
      document.title = `ShopCart -  ${id}`;
    } else {
      document.title = `ShopCart-Online Shopping`;
    }
  }, [id]);
}
