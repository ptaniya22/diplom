import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Ошибка страница не найдена</h1>
        <Link to="/">перейти на главную</Link>
    </div>
  )
}

export default NotFound