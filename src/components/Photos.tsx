import React from 'react'

interface Photo {
  id: number
  url: string
  caption: string
}

const photos: Photo[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1601626176430-c8e8b8c7b3b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Sunday Service'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Youth Group'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Community Outreach'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Bible Study'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Worship Team'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1574709755254-fcd942d09d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Church Building'
  }
]

const Photos: React.FC = () => {
  return (
    <section id="photos" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Church in Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-md">
              <img src={photo.url} alt={photo.caption} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <p className="text-sm">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Photos