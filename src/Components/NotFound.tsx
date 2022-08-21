import React from 'react'
import { Navigate } from 'react-router-dom'
import { ILoggerProps } from '../interfaces/LoggerProps'

export const NotFound = (props: ILoggerProps) => {
    console.log(props.consoleLogger, "<NotFound>")
  return (
    <>
    {window.location.pathname === "/" && <Navigate to="/posts" replace/>}
    <div>Page doesn't exist</div>
    
    </>
  )
}
