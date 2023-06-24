'use client'

import L from 'leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useEffect } from 'react'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:markerIcon.src,
  iconRetinaUrl:markerIcon2x.src,
  shadowUrl:markerShadow.src
})

var map = L.map('map').setView([8.986564, 38.733759], 15);  
var marker = L.marker([8.984986, 38.718669]).addTo(map);
let popup = L.popup();
const Map = ({
  center, gps, setGPS
}) => {

  useEffect(()=>{
    if(center){
      map.setView([center.lat, center.lng], 15);
    }
    marker.bindPopup("<b>Hi there, click any where on this map to mark your property's location!</b>").openPopup();
    map.on('click',handleClick)
    
    popup.setLatLng

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      
    }).addTo(map);
    
  },[])
  
  function handleClick(e){
    console.log('click',e)
    popup
    .setLatLng(e.latlng)
    .setContent("<p>You chose this location</p>")
    .openOn(map);
    setTimeout(()=>{
      marker.setLatLng(e.latlng)
      popup.closePopup()
      marker.setPopupContent("This will be your property's location").openPopup();
    }, 3000)
    setGPS(e.latlng)
  }

  return (
    <div id='map' style={{height:'100%',width:'100%',position:'relative', zIndex:0}}>
    </div>
  )
}

// import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
// import Leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css'



// const Map = () => {

//   useEffect(() => {
//     (async function init() {
//       delete Leaflet.Icon.Default.prototype._getIconUrl;
//       Leaflet.Icon.Default.mergeOptions({
//         iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
//         iconUrl: 'leaflet/images/marker-icon.png',
//         shadowUrl: 'leaflet/images/marker-shadow.png',
//       });
//     })();
//   }, []);

//   return (
//     <MapContainer  center={[8.986564, 38.733759]} zoom={15} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
//       <TileLayer
//         url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
//         attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         eventHandlers={handleClick}
//       >
//         <Marker 
//         position={[8.986564, 38.733759]}
//         draggable={true}
//         animate={true}
        
//         >
//           <Popup>
//             Hey ! you found me
//           </Popup>
//         </Marker>
//       </TileLayer>
//     </MapContainer>
//   )
// }

export default Map