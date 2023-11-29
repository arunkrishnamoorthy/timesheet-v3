### To be elaborated on the set up here. 

To run the service locally with s4 data, the following needs to be done. There is no need to use the default env json. 
Use the start command cds watch --profile hybrid and do the following . 

Using the cds bind , bind together the following things. 

1. bind the xsuaa service and xsuaa service key
2. bind the destination service and destination service key 
3. bind the xusaa and destination. 

sytnax to bind service to key 
cds bind --to service:key 

syntax to bind service to another service. 
cds bind --to service1,service2