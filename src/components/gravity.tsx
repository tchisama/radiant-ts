"use client"
import React from 'react'
import { Gravity, MatterBody } from './ui/gravity'
import Image from 'next/image'

function GravityComp() {
  return (
<Gravity gravity={{ x: 0, y: 2 }} className="w-full z-10 relative h-full">
        {
          [
            { x: '20%', y: '70%', text: 'Hosting' , color: 'bg-[#a7c957]',
              img:"/svg/server.svg"},
            { x: '30%', y: '70%', text: 'SSL' , color: 'bg-[#4895ef]'
            ,img:"/svg/ssl.svg"},
            { x: '60%', y: '70%', text: 'Backup' , color: 'bg-[#ffd670]'
            ,img:"/svg/backup.svg"},
            { x: '50%', y: '80%', text: 'Security' , color: 'bg-[#bdb2ff]'
            ,img:"/svg/security.svg"
            },
          ].map((item, index) => (
            <MatterBody
              key={index}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={item.x}
              y={item.y}
            >
              <div className={`text-xl sm:text-2xl  md:text-3xl ${item.color} text-white rounded-3xl border-[3px] border-black/10 hover:cursor-pointer px-8 py-4`}>
                <div className="drop-shadow-xl flex gap-2">
                {item.text}
                <Image
                src={item.img??""}
                width={40}
                height={40}
                alt="server"
                />
                </div>
              </div>
            </MatterBody>
          ))

        }
      </Gravity>
  )
}

export default GravityComp