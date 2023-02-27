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

const useGenerateNewLanding = () => {

  const generateLanding = (center, level) => {
    let [ x, y ] = center
    let plusOrMinus1 = Math.random() < 0.5 ? -1 : 1;
    let plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;
    let latMoveDist = Math.random()*(level/11)
    let lonMoveDist = Math.random()*(level/4)

    let newLat = x + (plusOrMinus1*latMoveDist)
    let newlon = y + (plusOrMinus2*lonMoveDist)

    let newCoordinates = [newLat, newlon]
    
    // console.log(newCoordinates)

    let newShipObject = {
      'shipLevel': level,
      'coordinates': newCoordinates,
    }

    return newShipObject;
  }



  

  return [generateLanding]
}

export default useGenerateNewLanding;