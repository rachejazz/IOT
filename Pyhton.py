import requests
payload1 = {
        
           'Sensortype': 'digital',
           'SensorId': 1234,
           'Status' : 1,
           'DateTime' : 'thursday'
           
          }
payload2= {
           'Sensortype' : 'analog',
           'SensorId' : 1234,
           'Input_Range' : 5,
           'Output_Range' : 55,
           'Sensitivity' : 10
           }

r=requests.post("http://localhost:1796/api/digischema",data=payload1)
r=requests.post("http://localhost:1796/api/anaschema",data=payload2)
