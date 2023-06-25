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

const Map = ({
  center, gps, setGPS
}) => {

  var map;
  var popup;
  var marker;
  useEffect(()=>{
    if(center){
      map.setView([center.lat, center.lng], 15);
    }

    if(gps.lat){
      if(!map){map = L.map('map').setView([gps.lat, gps.lng], 15);}
      marker = L.marker([gps.lat, gps.lng]).addTo(map);
      popup = L.popup();
      marker.bindPopup("<b>You chose this location</b>").openPopup();
      // marker.setPopupContent("This will be your property's location").openPopup();
    } else {
      if(!map){map = L.map('map').setView([8.986564, 38.733759], 15);  }
      marker = L.marker([8.984986, 38.718669]).addTo(map);
      popup = L.popup();
  
      marker.bindPopup("<b>Hi there, click any where on this map to mark your property's location!</b>").openPopup();
    }
    map.on('click',handleClick)
    
    // popup.setLatLng

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

export default Map