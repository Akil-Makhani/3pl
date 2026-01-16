# Free Images Setup Guide

## ✅ Images Already Configured

I've set up free stock images from **Unsplash** and **Pexels** that you can use directly in your website. These are:
- ✅ Free for commercial use
- ✅ No attribution required (though appreciated)
- ✅ High quality
- ✅ Can be used directly via URL

## 📁 Image Structure

Images are configured in `src/assets/images.js` with direct URLs. You can use them like this:

```javascript
import { images } from './assets/images';

// Use in component
<img src={images.warehouse.hero} alt="Warehouse" />
```

## 🖼️ Available Images

### Warehouse Images
- `images.warehouse.hero` - Modern warehouse exterior
- `images.warehouse.interior` - Warehouse interior
- `images.warehouse.operations` - Fulfillment operations

### Delivery Images
- `images.delivery.truck` - Delivery truck
- `images.delivery.packages` - Packages/shipping
- `images.delivery.shipping` - Shipping logistics

### Business Operations
- `images.business.pickPack` - Pick & pack process
- `images.business.storage` - Storage shelves
- `images.business.technology` - Technology/dashboard

### Location
- `images.location.auckland` - Auckland skyline
- `images.location.nz` - New Zealand landscape

## 🔄 How to Use in Components

### Option 1: Import and Use
```javascript
import { images } from '../assets/images';

function HeroSection() {
  return (
    <div style={{ backgroundImage: `url(${images.warehouse.hero})` }}>
      {/* Content */}
    </div>
  );
}
```

### Option 2: Direct URL in JSX
```javascript
<img 
  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" 
  alt="Warehouse" 
/>
```

## 📥 Download Images (Optional)

If you want to download images for offline use:

### Method 1: Direct Download
1. Visit the Unsplash/Pexels URL
2. Right-click and "Save Image As"
3. Save to `public/images/` folder
4. Update code to use local path: `/images/warehouse.jpg`

### Method 2: Using wget/curl
```bash
# Create images directory
mkdir -p public/images

# Download images (example)
curl -o public/images/warehouse.jpg "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
```

## 🎨 Finding More Free Images

### Unsplash
- Website: https://unsplash.com
- Search terms: "warehouse", "fulfillment", "logistics", "shipping"
- License: Free, no attribution required

### Pexels
- Website: https://www.pexels.com
- Search terms: "warehouse", "delivery", "packages", "3PL"
- License: Free for commercial use

### Pixabay
- Website: https://pixabay.com
- Search terms: "warehouse", "logistics", "shipping"
- License: Free, no attribution required

## 🔍 Search Tips

When searching for images:
1. Use specific terms: "modern warehouse", "fulfillment center", "3PL warehouse"
2. Filter by orientation: Landscape for hero sections
3. Check image size: Look for high-resolution images (1920px+ width)
4. Consider color scheme: Match your brand colors (#0000ff blue)

## ⚠️ Important Notes

1. **Attribution**: While not required, you can credit photographers if you want:
   - Unsplash: "Photo by [Name] on Unsplash"
   - Pexels: "Photo by [Name] from Pexels"

2. **Performance**: Using direct URLs means images load from external servers. For better performance:
   - Download and host locally
   - Use image optimization tools
   - Consider using Next.js Image component or similar

3. **Backup**: If an external image becomes unavailable, have backup URLs ready

## 🚀 Quick Start

The images are already configured! Just import and use:

```javascript
import { images } from './assets/images';

// In your component
<img src={images.warehouse.hero} alt="Modern Warehouse" />
```

## 📝 Custom Images

If you have your own images:
1. Place them in `public/images/` folder
2. Reference them as: `/images/your-image.jpg`
3. Or import from `src/assets/images/` if using webpack

## 🎯 Recommended Image Sizes

- **Hero Section**: 1920x1080px (or larger)
- **Feature Cards**: 800x600px
- **Thumbnails**: 400x400px
- **Icons/Logos**: 200x200px (or SVG)

## 🔗 Direct Image Links

Here are direct links to the configured images:

### Warehouse
- Hero: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80
- Interior: https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80
- Operations: https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&q=80

### Delivery
- Truck: https://images.unsplash.com/photo-1601581875305-f5a7b7ea0cdd?w=1920&q=80
- Packages: https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&q=80
- Shipping: https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80

### Business
- Pick & Pack: https://images.unsplash.com/photo-1604917011966-2c0d3e5024f3?w=1200&q=80
- Storage: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80
- Technology: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80

### Location
- Auckland: https://images.unsplash.com/photo-1512544781471-73751695a4b2?w=1920&q=80
- NZ: https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&q=80

