
export default function Gallery() {
  const images = [
    {
      src: "https://wecarebilling.com/assets/img/gallery/gallery-1.jpg",
      alt: "Operating room procedure with medical team",
    },
    {
      src: "https://wecarebilling.com/assets/img/gallery/gallery-2.jpg",
      alt: "Laboratory equipment and testing setup",
    },
    {
      src: "https://wecarebilling.com/assets/img/gallery/gallery-3.jpg",
      alt: "Research laboratory with scientist",
    },
    {
      src: "https://wecarebilling.com/assets/img/gallery/gallery-4.jpg",
      alt: "Surgical procedure in progress",
    },
    {
      src: "https://wecarebilling.com/assets/img/gallery/gallery-5.jpg",
      alt: "Healthcare professional portrait",
    },
    {
      src: "https://wecarebilling.com/assets/img/gallery/gallery-6.jpg",
      alt: "Laboratory researcher at work",
    },
    {
      src: "https://wecarebilling.com/assets/img/gallery/gallery-7.jpg",
      alt: "Medical imaging equipment",
    },
    {
      src: "https://wecarebilling.com/assets/img/gallery/gallery-8.jpg",
      alt: "Surgical team performing operation",
    },
  ]

  return (
    <div className=" mx-auto px-4 py-12">
     <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold text-center text-[#2C4964] mb-4">
          Gallery
        </h2>
          <div className="flex items-center">
            <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
            <div className="bg-[#1977CC] h-[3px] w-11"></div>
            <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
          </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}