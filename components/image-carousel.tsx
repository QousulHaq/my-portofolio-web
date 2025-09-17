"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FrasurbaneArrow } from './icons/arrow'
import { motion, AnimatePresence, wrap, usePresenceData } from 'motion/react'
import { useViewportSize } from '@/utils/useBetterMediaQuery'

type ImageUrlType = {
  link: string;
  type: string;
}

const ImageCarousel = ({ imageUrls }: { imageUrls: ImageUrlType[] }) => {
  const { isTabletOrMobile } = useViewportSize()

  const [selectedImage, setSelectedImage] = useState(0)
  const [directionState, setDirectionState] = useState(1)

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(0, imageUrls.length, selectedImage + newDirection)
    setSelectedImage(nextItem)
    setDirectionState(newDirection)
  }

  return (
    <div className="works-image w-[300px] md:w-[646px] relative">
      {
        imageUrls.length !== 1 && (
          <button
            className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -left-6 -translate-y-1/2 cursor-pointer"
            onClick={() => { setSlide(-1) }}
          >
            <FrasurbaneArrow color="#373D20" className="rotate-180" />
          </button>
        )
      }
      <AnimatePresence mode="wait" custom={directionState}>
        {
          imageUrls[selectedImage].type === "image" ? (
            <ImageSlide key={selectedImage} imageUrl={imageUrls[selectedImage].link} />
          ) : (
            <VideoSlide key={selectedImage} videoUrl={imageUrls[selectedImage].link} />
          )
        }
      </AnimatePresence>
      {
        imageUrls.length !== 1 && (
          <button
            className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -right-6 -translate-y-1/2 cursor-pointer"
            onClick={() => { setSlide(1) }}
          >
            <FrasurbaneArrow color="#373D20" />
          </button>
        )
      }
    </div >
  )
}

export default ImageCarousel

const ImageSlide = ({ imageUrl }: { imageUrl: string }) => {
  const { isTabletOrMobile } = useViewportSize()
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
        src={`${imageUrl}`}
        width={isTabletOrMobile ? 300 : 646}
        height={isTabletOrMobile ? 150 : 300}
        alt="project-pict"
        className="rounded-[8px] md:rounded-[12px] object-cover"
      />
    </motion.div>
  )
}

const VideoSlide = ({ videoUrl }: { videoUrl: string }) => {
  const { isTabletOrMobile } = useViewportSize()
  const direction = usePresenceData()
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 * direction * -1 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 * direction }}
      transition={{ duration: 0.4 }}
      className="video-wrapper w-fit overflow-hidden rounded-xl flex justify-center items-end h-[150px] md:h-[300px]"
    >
      <video width={isTabletOrMobile ? 300 : 646} height={isTabletOrMobile ? 150 : 300} controls preload="none">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}