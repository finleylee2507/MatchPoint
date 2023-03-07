import { useEffect } from "react";
import { useAuthState, useDbData} from "./firebase";

export const useProfile = () => {
  const [user] = useAuthState();
  const [users, error, loading] = useDbData("/users/");



  
  return [user, error, loading];
};