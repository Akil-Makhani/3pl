// Example component showing how to use free images
import { images } from '../assets/images';

const ImageExample = () => {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">Image Examples</h2>
      
      {/* Warehouse Image */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Warehouse</h3>
        <img 
          src={images.warehouse.hero} 
          alt="Modern Warehouse" 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Delivery Truck */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Delivery Truck</h3>
        <img 
          src={images.delivery.truck} 
          alt="Delivery Truck" 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Background Image Example */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Background Image</h3>
        <div 
          className="w-full h-64 rounded-lg bg-cover bg-center relative"
          style={{ backgroundImage: `url(${images.warehouse.interior})` }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Overlay Text</p>
          </div>
        </div>
      </div>

      {/* Grid of Images */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Image Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img 
            src={images.business.pickPack} 
            alt="Pick & Pack" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <img 
            src={images.business.storage} 
            alt="Storage" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <img 
            src={images.delivery.packages} 
            alt="Packages" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageExample;


