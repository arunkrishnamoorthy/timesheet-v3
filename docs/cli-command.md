### Create Service - XSUAA 

Create xsuaa service.

```
cf create-service xsuaa application ordinats-server-xsuaa -c xs-security.json
```

Create xsuaa service key. 

```
cf create-service-key ordinats-server-xsuaa ordinats-server-xsuaa-key
```

Bind the service key. 

```
cds bind --to ordinats-server-xsuaa:ordinats-server-xsuaa-key
```

Generate the service key 


