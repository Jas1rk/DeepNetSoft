import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FormType } from "../Types/MenuTypes";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const UseFetchMenu = () => {
  const [menuItems, setMenuItems] = useState<FormType>();
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`${backendUrl}/create-menu`);
        setMenuItems(response.data);
      } catch (error) {
        toast.error("error");
      }
    };
    fetchMenu();
  }, []);
  return { menuItems };
};

export default UseFetchMenu;
