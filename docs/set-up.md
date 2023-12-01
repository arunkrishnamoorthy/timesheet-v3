# INSTALLATION

From the following git repository, import the project. 

```
...repo link to be added
```

Run the command from the root folder of the project to install the dependencies. 

```sh
npm install
```

Do the following bindings to generate the required credentials in the cdsrc.private.json file of the cap server to authenticate the cap service. 

Using the cds bind , bind together the following things. 

>Sytnax to bind service to key 
```cds bind --to service:service-key```

Bind the xsuaa service and xsuaa service key
```sh
cds bind --to ordinats-server-auth:ordinats-server-auth-key
```

Bind the destination service and destination service key 
```sh
cds bind --to ordinats-destination-service:ordinats-destination-service-key
```

>Syntax to bind service to another service. 
```cds bind --to service1,service2```

Bind the xusaa and destination to authenticate the s4 service. 

```sh
cds bind --to ordinats-server-auth,ordinats-destination-service
```

The cap server can be individually executed using the using the start command 

```sh
cds watch --profile hybrid
```

Configure the following in the launch.json of the vscode to debug the CAP server individually. 

```json
{
    "command": "cds watch --profile hybrid",
    "name": "Debug: Server",
    "request": "launch",
    "type": "node-terminal",
    "cwd": "${workspaceFolder}/packages/server"
}
```
