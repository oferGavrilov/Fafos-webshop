import React from 'react'
import Image from 'next/image'
import hotCategories from '../../constants/hot-categories.json'

function HotCategories () {

      return (
            <ul className="flex gap-[20px] flex-col sm:flex-row sm:mx-14">
                  {hotCategories.map((category) => (
                        <li key={category.id} className="flex-1 overflow-hidden relative shadow-2xl">
                              {/* <img
                                    className="max-h-[700px] w-[100%] h-[100%] transition duration-300 object-cover hover:scale-110"
                                    src={category.img}
                                    alt={category.title}
                              /> */}
                              <Image
                                    src={`/${category.img}`}
                                    alt={category.title}
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="max-h-[700px]  w-[100%] h-[100%] transition duration-300 object-cover hover:scale-110"
                              />
                              <h2 className="teaser-name underline underline-offset-4 drop-shadow-xl">
                                    {category.title}
                              </h2>
                        </li>
                  ))}
            </ul>
      )
}

export default HotCategories
