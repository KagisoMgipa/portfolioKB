import React from 'react'
import ButtonMagic from './UI/ButtonMagic'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[50px] md:mb-5" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-purple"> tackle</span> test and deploy a better solution 
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
            I look forward to contributing to your organization, driving continuous improvement, and delivering exceptional quality..
            </p>
            <a href="mailto:kagitony00@gmail.com">
                <ButtonMagic
                title="Let's get in touch "
                icon={<FaLocationArrow />}
                position="right"
                />
            </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
                Copyright © 2024 Kagiso
            </p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer
                     flex justify-center items-center backdrop-filter backdrop-blur-lg 
                     saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <img src={profile.img} alt={profile.img}
                        width={20} height={20} />
                        
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer