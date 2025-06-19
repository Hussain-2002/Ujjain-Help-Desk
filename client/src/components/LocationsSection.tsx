import { openGoogleMaps } from "@/lib/utils";

const locations = [
  {
    id: "mazare-najmi",
    name: "Mazare Najmi (Central Zone)",
    description: "Central Zone administrative center",
    distance: "Central Location",
    icon: "business",
    query: "Mazare Najmi, Ujjain, Madhya Pradesh, India"
  },
  {
    id: "safiee-masjid",
    name: "Safiee Masjid",
    description: "Religious center and community services",
    distance: "1.5 km from Central Zone",
    icon: "account_balance",
    query: "Safiee Masjid, Ujjain, Madhya Pradesh, India"
  },
  {
    id: "taiyebi-masjid",
    name: "Taiyebi Masjid",
    description: "Religious center and prayer facility",
    distance: "2.0 km from Central Zone",
    icon: "account_balance",
    query: "Taiyebi Masjid, Ujjain, Madhya Pradesh, India"
  },
  {
    id: "ibrahim-pura",
    name: "Ibrahim Pura",
    description: "Residential area and community center",
    distance: "2.8 km from Central Zone",
    icon: "location_city",
    query: "Ibrahim Pura, Ujjain, Madhya Pradesh, India"
  },
  {
    id: "hasanji-badsha",
    name: "Hasanji Badsha",
    description: "Community center and services",
    distance: "3.2 km from Central Zone",
    icon: "place",
    query: "Hasanji Badsha, Ujjain, Madhya Pradesh, India"
  },
  {
    id: "muffadal-park",
    name: "Muffadal Park",
    description: "Recreation area and community gatherings",
    distance: "1.8 km from Central Zone",
    icon: "park",
    query: "Muffadal Park, Ujjain, Madhya Pradesh, India"
  }
];

export default function LocationsSection() {
  const handleLocationClick = (query: string) => {
    openGoogleMaps(query);
  };

  return (
    <section id="locations" className="bg-white rounded-lg material-shadow-2 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ujjain Locations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find our various centers and locations across Ujjain. Click on any location card to get directions.
        </p>
      </div>

      {/* Maps Container */}
      <div className="bg-gray-100 rounded-lg overflow-hidden material-shadow-1 mb-8">
        <div className="aspect-video w-full bg-gray-200 flex items-center justify-center text-gray-500 relative">
          {/* Google Maps Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58877.567890123!2d75.7760831!3d23.1815417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963029b4b14de7d%3A0x818ba9d2e469e7c7!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1625847392832!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ujjain Locations Map"
          />
          
          {/* Map overlay with locations info */}
          <div className="absolute top-4 left-4 bg-white rounded-lg p-4 material-shadow-2 max-w-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Key Locations</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-700">
                <span className="material-icons text-red-600 text-sm mr-2">location_on</span>
                Mazare Najmi (Central Zone)
              </div>
              <div className="flex items-center text-gray-700">
                <span className="material-icons text-red-600 text-sm mr-2">location_on</span>
                Safiee Masjid
              </div>
              <div className="flex items-center text-gray-700">
                <span className="material-icons text-red-600 text-sm mr-2">location_on</span>
                Taiyebi Masjid
              </div>
              <div className="flex items-center text-gray-700">
                <span className="material-icons text-red-600 text-sm mr-2">location_on</span>
                Ibrahim Pura
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {locations.map((location) => (
          <div
            key={location.id}
            className="bg-gray-50 rounded-lg p-6 card-hover cursor-pointer"
            onClick={() => handleLocationClick(location.query)}
          >
            <div className="flex items-center mb-4">
              <span className="material-icons text-red-600 mr-3">{location.icon}</span>
              <h3 className="font-semibold text-gray-900">{location.name}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">{location.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="material-icons text-xs mr-1">directions</span>
              <span>{location.distance}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Distance Information */}
      <div className="p-6 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
          <span className="material-icons text-yellow-600 mr-2">info</span>
          Distance Information
        </h3>
        <p className="text-gray-700 text-sm">
          All distances are calculated from Mazare Najmi (Central Zone). 
          Click on any location card above to open detailed directions in Google Maps.
        </p>
      </div>
    </section>
  );
}
