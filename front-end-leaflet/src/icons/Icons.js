import L from 'leaflet';

const testIcon = new L.Icon({
    iconUrl: require('../icons/download.png'),
    // iconRetinaUrl: require('../img/marker-pin-person.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 55),
    className: 'leaflet-div-icon'
});

export { testIcon };