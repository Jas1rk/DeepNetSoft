import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const backendUrl = 'https://deepnetsoft.timetake.shop';


const UseFetchMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`${backendUrl}/create-menu`);
        setMenuItems(response.data);
      } catch (error) {
        console.log(error,"<><>")
        toast.error("error");
      }
    };
    fetchMenu();
  }, []);
  return { menuItems };
};

export default UseFetchMenu;
