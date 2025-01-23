import { galleryImages } from '../constants/data';

const Gallery = () => (
  <section id="gallery" className="py-12 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 font-poppins">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="bg-gray-200 flex items-center justify-center h-50 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 transition-transform duration-300">
            <img src={image.image} alt={image.name} className="object-cover w-full h-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
