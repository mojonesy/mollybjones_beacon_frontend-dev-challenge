import { useEffect } from 'react';

function useGeoLocation() {
    const [location, setLocation] = useState({
          loaded: false,
          coordinates: { latitude: '', longitude: '' },
        });


    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                latitude: location.latitude,
                longitude: location.longitude,
            }
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
        });
    }

    useEffect(() => {
        if(!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
}

export default useGeoLocation;