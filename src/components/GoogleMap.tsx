import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

const Map = ({
  center = { lat: 26.7606, lng: 83.3732 }, // Default coordinates for Gorakhpur region
  zoom = 15,
}: MapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) {
    return (
      <div className="w-full h-[400px] bg-muted flex items-center justify-center">
        Loading map...
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName="w-full h-[400px] rounded-lg"
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b7280" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#dbeafe" }],
          },
        ],
      }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default Map;
