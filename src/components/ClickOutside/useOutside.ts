import { useEffect, useRef } from "react";

export default function useOutside(onShow: () => void)  {
  const ref: any = useRef();
  
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onShow()
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

   return ref;
}