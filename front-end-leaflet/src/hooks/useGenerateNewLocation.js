let example = {
  "indicent_id": "1",
    "initialization_time": "date",
      "nature_code": "xxx",
        "location": {
    "address": {
      "street": "xxx",
        "city": "xxx",
          "state": "xxx",
            "zip": "xxx"
    },
    "point": {
      "latitude": 46.798031,
        "longitude": -92.150649
    }
  },
  "outcome_status": "xxx",
    "responders": []
}

const useGenerateNewLocation = () => {

  const generateIncident = () => {
    return example
  }

  return [generateIncident]
}

export default useGenerateNewLocation;