let example = {
  "indicent_id": "1",
    "initialization_time": "date",
      "nature_code": "xxx",
        "location": {
    "point": {
      "latitude": 46.798031,
        "longitude": -92.150649
    }
  },
  "outcome_status": "xxx",
    "responders": []
}

const useGenerateNewLocation = () => {

  const generateIncident = (center, distance) => {
    let [ x, y ] = center
    let plusOrMinus1 = Math.random() < 0.5 ? -1 : 1;
    let plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;
    let latMoveDist = Math.random()*(distance/10)
    let lonMoveDist = Math.random()*(distance/3)

    let newLat = x + (plusOrMinus1*latMoveDist)
    let newlon = y + (plusOrMinus2*lonMoveDist)

    let newCoordinates = [newLat, newlon]
    
    console.log(newCoordinates)
    // console.log(center)
    // console.log(x)
    // console.log(y)
    // console.log(distance/10)
    // console.log(distance/3)


  }

  return [generateIncident]
}

export default useGenerateNewLocation;