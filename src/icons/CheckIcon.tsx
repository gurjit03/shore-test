import React from "react"
import IconProps from "../interfaces/IconProps.interface"

const CheckIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path d="M20.293 5.293L9 16.586l-4.293-4.293-1.414 1.414L9 19.414 21.707 6.707l-1.414-1.414z" />
    </svg>
  )
}

export default CheckIcon;