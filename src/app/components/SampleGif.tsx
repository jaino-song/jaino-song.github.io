import React from 'react'
import Image from 'next/image'

const SampleGif = ({ gif }: { gif: string }) => {
  // Determine if it's a video or image based on extension
  const isVideo = gif.endsWith('.webm') || gif.endsWith('.mp4');
  
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center bg-[url('/png/iPhone.png')] bg-cover bg-center"
    >
      {/* Content (video or image) */}
      {isVideo ? (
        <video 
          className="absolute inset-0 w-[250px] z-10 object-cover border-image-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={gif} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image 
          src={gif} 
          alt="Project demo" 
          fill
          className="object-cover rounded-[40px]"
        />
      )}
      
      {/* iPhone frame overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image 
          src="/svg/iPhone.svg" 
          alt="iPhone frame" 
          width={393} 
          height={853}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default SampleGif