import React from 'react'
import '@styles/components/Categories.scss'

// eslint-disable-next-line react/prop-types
const Categories = ({ children, title }) => (
  <div className="categories">
    <h3 className="categories__title">{title}</h3>
    {children}
  </div>
)

export default Categories
