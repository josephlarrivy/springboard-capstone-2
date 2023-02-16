Organizational Assessment for the Duluth Police Department - Version 2.1
https://duluthmn.gov/media/9310/duluth-report-full-v21.pdf

Colonial Heights Computer Aided Dispatch (CAD) - Requirements
https://www.colonialheightsva.gov/DocumentCenter/View/8748/Attachment-H?bidId=



What data needs to be stored for each 'event'?

location: address
location: lat & long
incident types or nature codes
event history/timeline
time/date (for all transactions related to event)
dispater that took the call
caller information



{
    "indicent_number" : "1",
    "initialization_time" : "date/time",
    "nature_code": "xxx",
    "location" : {
        "address" : {
            "street": "xxx",
            "city": "xxx",
            "state": "xxx",
            "zip": "xxx"
        },
        "point" : {
            "latitude" : "000",
            "longitude" : "000"
        }
    },
    "outcome_status" : "xxx",
    "responders" : []
}




let list = new LinkedList({
    "indicent_number": "1",
    "initialization_time": "date/time",
    "nature_code": "xxx",
    "location": {
        "address": {
            "street": "xxx",
            "city": "xxx",
            "state": "xxx",
            "zip": "xxx"
        },
        "point": {
            "latitude": "000",
            "longitude": "000"
        }
    },
    "outcome_status": "xxx",
    "responders" : []
})
list.append({
    "indicent_number": "2",
    "initialization_time": "date/time",
    "nature_code": "xxx",
    "location": {
        "address": {
            "street": "xxx",
            "city": "xxx",
            "state": "xxx",
            "zip": "xxx"
        },
        "point": {
            "latitude": "000",
            "longitude": "000"
        }
    },
    "outcome_status": "xxx",
    "responders" : []
})
list.append({
    "indicent_number": "3",
    "initialization_time": "date/time",
    "nature_code": "xxx",
    "location": {
        "address": {
            "street": "xxx",
            "city": "xxx",
            "state": "xxx",
            "zip": "xxx"
        },
        "point": {
            "latitude": "000",
            "longitude": "000"
        }
    },
    "outcome_status": "xxx",
    "responders" : []
})
list.append({
    "indicent_number": "4",
    "initialization_time": "date/time",
    "nature_code": "xxx",
    "location": {
        "address": {
            "street": "xxx",
            "city": "xxx",
            "state": "xxx",
            "zip": "xxx"
        },
        "point": {
            "latitude": "000",
            "longitude": "000"
        }
    },
    "outcome_status": "xxx",
    "responders" : []
})