import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import "../App.css"; // Assuming styles are handled here
import { APIProvider,Map, useMapsLibrary,useMap } from "@vis.gl/react-google-maps";

const Panic=()=>{
    const navigate=useNavigate();
    const position ={lat: 43.6532, lng: -79.3832}
    const [zoom, setZoom] = useState(9);
    const [routes,setRoutes]= useState([]);
    const [routeIndex,setRouteIndex]=useState(0);
    const selected= routes[routeIndex];
    const leg = selected?.legs[0];

    return <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200 relative">
      <div className="relative w-full max-w-xs">
        
        <div className="bg-white h-[556px] w-[272px] rounded-tl-3xl rounded-br-3xl shadow-lg p-6">
          <APIProvider apiKey="AIzaSyAtWt9ACf5HMAIoMxxvM6BVoPNaLnzJ1gc">
          <Map
      style={{width: '100%', height: '60%'}}
      onZoomChanged={(newZoom) => setZoom(newZoom)} // Handle zoom changes
      mapId="6a337738e5db55bc"
      fullscreenControl={false}
    >
        <Directions></Directions>
    </Map>
          </APIProvider>
        </div>
      </div>

      
    </div>
}

function Directions(){
    const map = useMap();
    const routesLibrary= useMapsLibrary("routes");
    const [directionsService,setDirectionService]= useState();
    const [directionsRenderer,setDirectionRenderer]= useState();
    const [routes,setRoutes]=useState([]);
    useEffect(()=>{
        if(!routesLibrary || !map) return;
        setDirectionService(new routesLibrary.DirectionsService());
        setDirectionRenderer(new routesLibrary.DirectionsRenderer({map}));
    },[routesLibrary,map]);

    useEffect(()=>{

        if(!directionsRenderer || !directionsService) return;

        directionsService.route({
            origin:"100 Front St, Toronto ON",
            destination:"500 College St, Toronto ON",
            travelMode: window.google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }).then(response=>{
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
        })
    },[directionsService,directionsRenderer]);
    
    
}

export default Panic;