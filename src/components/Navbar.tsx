import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 w-full mx-auto font-raleway">
      <div className="text-2xl font-bold text-textblue font-raleway ">
        Anjali <span className="text-textorange">Elastomer</span>
      </div>
      <ul className="flex space-x-12 text-textblue text-2xl font-light">
        {[
          "Home",
          "About Us",
          "Products",
          "Business",
          "Projects",
          "Career",
          "Contact Us",
        ].map((item) => (
          <li key={item} className="flex space-x-12 text-textblue text-lg font-light">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;