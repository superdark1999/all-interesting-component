import { Button } from "antd";
import React, { useCallback } from 'react'
import useOutside from './useOutside'

export default function ClickOutside() {
  const onShow = useCallback(() => {
    console.log("ahihi")
  },[])
  const ref = useOutside(onShow)

  return (
    <Button ref={ref}>ClickOutside</Button>
  )
}
