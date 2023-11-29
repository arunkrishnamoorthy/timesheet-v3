### User information API 

### User Attribues 

```api
GET {{approuter}}/user-api/currentUser
```

**Result:** 

```json
{
  "email": "arun.krishnamoorthy@aarini.com",
  "name": "arun.krishnamoorthy@aarini.com",
  "scopes": [
    "openid"
  ]
}
```

### Current User

```url
GET {{approuter}}/user-api/currentUser
```

**Result:** 

```json
{
  "email": "arun.krishnamoorthy@aarini.com",
  "name": "arun.krishnamoorthy@aarini.com",
  "scopes": [
    "openid"
  ],
  "displayName": "arun.krishnamoorthy@aarini.com"
}
```