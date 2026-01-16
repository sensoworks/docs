---
title: Access Token
description: Login
---

# Login
### Access Token
This API is used to recuperate the Bearer Token for calling all the platform APIs.

```
POST 'https://prod.sensoworks.com/foreman/sensoworks/api/account/access_token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic <base64 of string "username:password">'
```

#### Authentication
The API requires a basic authentication.
If you do it manually, launch this command with your username and password to create the token:
```shell
printf 'username:password' | base64
dXNlcm5hbWU6cGFzc3dvcmQ=
```
Now you can use the autorization header in the API call:
```shell
--header 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ='
```

#### Response body example
```json
{
    "access_token": "xxx.yyy.zzz",
    "refresh_token": "xxx.yyy.zzz",
    "issue_date": "2025-12-23T17:50:12.274Z",
    "token_type": "Bearer",
    "expires_in": 31536000000
}
```

#### Responses
- 200 (OK): given when the login has been successful

---
