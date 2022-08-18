import React from 'react'

const Button = ({styles, text}) => (
  <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg ${styles}`}>{text}</button>
)

export default Button