import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";


const useRestrauntMenu = (resID) => {
  
  const [resInfo, setResInfo] = useState(null);
    // fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData= async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestrauntMenu;
