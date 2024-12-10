import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FormType } from "../Types/MenuTypes";
const backendUrl = "http://localhost:5000";


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
