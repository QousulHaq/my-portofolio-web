"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FrasurbaneArrow } from './icons/arrow'
import { motion, AnimatePresence, wrap, usePresenceData } from 'motion/react'

const ImageCarousel = ({ imageUrls }: { imageUrls: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [directionState, setDirectionState] = useState(1)

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(0, imageUrls.length, selectedImage + newDirection)
    setSelectedImage(nextItem)
    setDirectionState(newDirection)
  }

  return (
    <div className="works-image w-[646px] relative">
      <button
        className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -left-6 -translate-y-1/2 cursor-pointer"
        onClick={() => { setSlide(-1) }}
      >
        <FrasurbaneArrow color="#373D20" className="rotate-180" />
      </button>
      <AnimatePresence mode="wait" custom={directionState}>
        <ImageSlide key={selectedImage} imageUrl={imageUrls[selectedImage]} />
      </AnimatePresence>
      <button
        className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -right-6 -translate-y-1/2 cursor-pointer"
        onClick={() => { setSlide(1) }}
      >
        <FrasurbaneArrow color="#373D20" />
      </button>
    </div >
  )
}

export default ImageCarousel

const ImageSlide = ({ imageUrl }: { imageUrl: string }) => {
  const direction = usePresenceData()
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 * direction * -1 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 * direction }}
      transition={{ duration: 0.4 }}
      className="image-wrapper"
    >
      <Image
        src={`https://placehold.co/646x300/png?text=${imageUrl}`}
        width={646}
        height={300}
        alt="project-pict"
        className="rounded-[12px] object-cover"
      />
    </motion.div>
  )
}