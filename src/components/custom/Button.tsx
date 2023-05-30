/* eslint-disable react/button-has-type */
import React from 'react'

interface ButtonProps {
      backgroundColor: string
      color: string
      borderColor: string
      borderWidth: string
      text:string
      buttonType: 'button' | 'submit' | 'reset'
      width: string
      margin: string
}

export default function Button ({ backgroundColor, borderColor, borderWidth, color , text , width, margin, buttonType = 'button'}: ButtonProps): JSX.Element {
      console.log(backgroundColor , borderColor , borderWidth , color)
      return (
            <button style={{borderWidth , borderColor , color:borderColor , width , margin}} className={`flow-btn  px-7   before:!${backgroundColor} hover:!text-white`} type={buttonType} >{text}</button>
      )
}
