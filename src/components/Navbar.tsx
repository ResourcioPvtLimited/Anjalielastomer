import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 w-full mx-auto">
      <div className="text-2xl font-bold text-gray-900">
        Anjali <span className="text-orange-500">Elastomer</span>
      </div>
      <ul className="flex space-x-12 text-gray-900 text-sm font-medium">
        {[
          "Home",
          "About Us",
          "Products",
          "Business",
          "Projects",
          "Career",
          "Contact Us",
        ].map((item) => (
          <li key={item} className="hover:text-orange-500 cursor-pointer transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;