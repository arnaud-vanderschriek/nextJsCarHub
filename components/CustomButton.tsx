"use client"

import React, {useState} from "react"
import Image from "next/image"
import {CustomButtonProps} from "@/types"

const CustomButton = ({ title, containerStyles, handleClick, btnType }:CustomButtonProps) => {
  return(
    <button 
      disabled={false}
      type={btnType || "button"}
      className={`custom_btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}></span>
      {title}
    </button>
  )
}

export default CustomButton
