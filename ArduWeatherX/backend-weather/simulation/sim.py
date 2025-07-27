# Fake Iot Sensor Data 

import requests, random, time
import json
for i in range(5): 
    payload = {
        "temperature" : round(random.uniform(25,40), 2) , 
        "humidity" :  round(random.uniform(30, 70), 2)
    }

    response = requests.post("http://127.0.0.1:5000/data", json=payload)
    print(response)
    print(response.text)
    # try : 
    #     print(json.dumps(response.json(), indent = 4))
    # except: 
    #     print("response is not valid")
    # json is a serializable python object that will be sent as json 
    # delay execution in sec
    time.sleep(10)

