import L from 'leaflet';

const homeIcon = new L.Icon({
    iconUrl: require('../icons/home.png'),
    // iconRetinaUrl: require('../img/marker-pin-person.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    // iconSize: new L.Point(20, 25),
    iconSize: new L.Point(40, 40),
    className: 'home-icon-div'
});

const shipIcon1 = new L.Icon({
    iconUrl: require('../icons/ship1.png'),
    // iconRetinaUrl: require('../img/marker-pin-person.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    // iconSize: new L.Point(20, 25),
    iconSize: new L.Point(40, 40),
    className: 'ship-icon-div'
});

export { homeIcon, shipIcon1 };