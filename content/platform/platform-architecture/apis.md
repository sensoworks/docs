# APIs

### AccountRestController

**Base URL:** `/api/accounts`

- **GET /api/accounts**

  - Description: Retrieve all accounts.
  - Parameters: None
  - Response: `200 OK` with a list of accounts

- **GET /api/accounts/{id}**

  - Description: Retrieve an account by its ID.
  - Parameters:
    - `id` (path) - The ID of the account to retrieve
  - Response: `200 OK` with the account details

- **POST /api/accounts**

  - Description: Create a new account.
  - Parameters:
    - `account` (body) - The account object to create
  - Response: `201 Created` with the created account

- **PUT /api/accounts/{id}**

  - Description: Update an existing account.
  - Parameters:
    - `id` (path) - The ID of the account to update
    - `account` (body) - The updated account object
  - Response: `200 OK` with the updated account

- **DELETE /api/accounts/{id}**
  - Description: Delete an account by its ID.
  - Parameters:
    - `id` (path) - The ID of the account to delete
  - Response: `204 No Content`

---

### AlarmRestController

**Base URL:** `/api/alarms`

- **GET /api/alarms**

  - Description: Retrieve all alarms.
  - Parameters: None
  - Response: `200 OK` with a list of alarms

- **GET /api/alarms/{id}**

  - Description: Retrieve an alarm by its ID.
  - Parameters:
    - `id` (path) - The ID of the alarm to retrieve
  - Response: `200 OK` with the alarm details

- **POST /api/alarms**

  - Description: Create a new alarm.
  - Parameters:
    - `alarm` (body) - The alarm object to create
  - Response: `201 Created` with the created alarm

- **PUT /api/alarms/{id}**

  - Description: Update an existing alarm.
  - Parameters:
    - `id` (path) - The ID of the alarm to update
    - `alarm` (body) - The updated alarm object
  - Response: `200 OK` with the updated alarm

- **DELETE /api/alarms/{id}**
  - Description: Delete an alarm by its ID.
  - Parameters:
    - `id` (path) - The ID of the alarm to delete
  - Response: `204 No Content`

---

### AuditingLogRestController

**Base URL:** `/api/auditinglogs`

- **GET /api/auditinglogs**

  - Description: Retrieve all auditing logs.
  - Parameters: None
  - Response: `200 OK` with a list of auditing logs

- **GET /api/auditinglogs/{id}**

  - Description: Retrieve an auditing log by its ID.
  - Parameters:
    - `id` (path) - The ID of the auditing log to retrieve
  - Response: `200 OK` with the auditing log details

- **POST /api/auditinglogs**

  - Description: Create a new auditing log.
  - Parameters:
    - `auditingLog` (body) - The auditing log object to create
  - Response: `201 Created` with the created auditing log

- **PUT /api/auditinglogs/{id}**

  - Description: Update an existing auditing log.
  - Parameters:
    - `id` (path) - The ID of the auditing log to update
    - `auditingLog` (body) - The updated auditing log object
  - Response: `200 OK` with the updated auditing log

- **DELETE /api/auditinglogs/{id}**
  - Description: Delete an auditing log by its ID.
  - Parameters:
    - `id` (path) - The ID of the auditing log to delete
  - Response: `204 No Content`

---

### CommandsRestController

**Base URL:** `/api/commands`

- **GET /api/commands**

  - Description: Retrieve all commands.
  - Parameters: None
  - Response: `200 OK` with a list of commands

- **GET /api/commands/{id}**

  - Description: Retrieve a command by its ID.
  - Parameters:
    - `id` (path) - The ID of the command to retrieve
  - Response: `200 OK` with the command details

- **POST /api/commands**

  - Description: Create a new command.
  - Parameters:
    - `command` (body) - The command object to create
  - Response: `201 Created` with the created command

- **PUT /api/commands/{id}**

  - Description: Update an existing command.
  - Parameters:
    - `id` (path) - The ID of the command to update
    - `command` (body) - The updated command object
  - Response: `200 OK` with the updated command

- **DELETE /api/commands/{id}**
  - Description: Delete a command by its ID.
  - Parameters:
    - `id` (path) - The ID of the command to delete
  - Response: `204 No Content`

---

### ComponentSettingRestController

**Base URL:** `/api/componentsettings`

- **GET /api/componentsettings**

  - Description: Retrieve all component settings.
  - Parameters: None
  - Response: `200 OK` with a list of component settings

- **GET /api/componentsettings/{id}**

  - Description: Retrieve a component setting by its ID.
  - Parameters:
    - `id` (path) - The ID of the component setting to retrieve
  - Response: `200 OK` with the component setting details

- **POST /api/componentsettings**

  - Description: Create a new component setting.
  - Parameters:
    - `componentSetting` (body) - The component setting object to create
  - Response: `201 Created` with the created component setting

- **PUT /api/componentsettings/{id}**

  - Description: Update an existing component setting.
  - Parameters:
    - `id` (path) - The ID of the component setting to update
    - `componentSetting` (body) - The updated component setting object
  - Response: `200 OK` with the updated component setting

- **DELETE /api/componentsettings/{id}**
  - Description: Delete a component setting by its ID.
  - Parameters:
    - `id` (path) - The ID of the component setting to delete
  - Response: `204 No Content`

---

### ConfigurableLinkRestController

**Base URL:** `/api/configurablelinks`

- **GET /api/configurablelinks**

  - Description: Retrieve all configurable links.
  - Parameters: None
  - Response: `200 OK` with a list of configurable links

- **GET /api/configurablelinks/{id}**

  - Description: Retrieve a configurable link by its ID.
  - Parameters:
    - `id` (path) - The ID of the configurable link to retrieve
  - Response: `200 OK` with the configurable link details

- **POST /api/configurablelinks**

  - Description: Create a new configurable link.
  - Parameters:
    - `configurableLink` (body) - The configurable link object to create
  - Response: `201 Created` with the created configurable link

- **PUT /api/configurablelinks/{id}**

  - Description: Update an existing configurable link.
  - Parameters:
    - `id` (path) - The ID of the configurable link to update
    - `configurableLink` (body) - The updated configurable link object
  - Response: `200 OK` with the updated configurable link

- **DELETE /api/configurablelinks/{id}**
  - Description: Delete a configurable link by its ID.
  - Parameters:
    - `id` (path) - The ID of the configurable link to delete
  - Response: `204 No Content`

---

### DataGateRestController

**Base URL:** `/api/datagate`

- **GET /api/datagate**

  - Description: Retrieve all data gates.
  - Parameters: None
  - Response: `200 OK` with a list of data gates

- **GET /api/datagate/{id}**

  - Description: Retrieve a data gate by its ID.
  - Parameters:
    - `id` (path) - The ID of the data gate to retrieve
  - Response: `200 OK` with the data gate details

- **POST /api/datagate**

  - Description: Create a new data gate.
  - Parameters:
    - `dataGate` (body) - The data gate object to create
  - Response: `201 Created` with the created data gate

- **PUT /api/datagate/{id}**

  - Description: Update an existing data gate.
  - Parameters:
    - `id` (path) - The ID of the data gate to update
    - `dataGate` (body) - The updated data gate object
  - Response: `200 OK` with the updated data gate

- **DELETE /api/datagate/{id}**
  - Description: Delete a data gate by its ID.
  - Parameters:
    - `id` (path) - The ID of the data gate to delete
  - Response: `204 No Content`

---

### DeviceRestController

**Base URL:** `/api/devices`

- **GET /api/devices**

  - Description: Retrieve all devices.
  - Parameters: None
  - Response: `200 OK` with a list of devices

- **GET /api/devices/{id}**

  - Description: Retrieve a device by its ID.
  - Parameters:
    - `id` (path) - The ID of the device to retrieve
  - Response: `200 OK` with the device details

- **POST /api/devices**

  - Description: Create a new device.
  - Parameters:
    - `device` (body) - The device object to create
  - Response: `201 Created` with the created device

- **PUT /api/devices/{id}**

  - Description: Update an existing device.
  - Parameters:
    - `id` (path) - The ID of the device to update
    - `device` (body) - The updated device object
  - Response: `200 OK` with the updated device

- **DELETE /api/devices/{id}**
  - Description: Delete a device by its ID.
  - Parameters:
    - `id` (path) - The ID of the device to delete
  - Response: `204 No Content`

---

### DeviceTypeRestController

**Base URL:** `/api/devicetypes`

- **GET /api/devicetypes**

  - Description: Retrieve all device types.
  - Parameters: None
  - Response: `200 OK` with a list of device types

- **GET /api/devicetypes/{id}**

  - Description: Retrieve a device type by its ID.
  - Parameters:
    - `id` (path) - The ID of the device type to retrieve
  - Response: `200 OK` with the device type details

- **POST /api/devicetypes**

  - Description: Create a new device type.
  - Parameters:
    - `deviceType` (body) - The device type object to create
  - Response: `201 Created` with the created device type

- **PUT /api/devicetypes/{id}**

  - Description: Update an existing device type.
  - Parameters:
    - `id` (path) - The ID of the device type to update
    - `deviceType` (body) - The updated device type object
  - Response: `200 OK` with the updated device type

- **DELETE /api/devicetypes/{id}**
  - Description: Delete a device type by its ID.
  - Parameters:
    - `id` (path) - The ID of the device type to delete
  - Response: `204 No Content`

---

### DevopsRestController

**Base URL:** `/api/devops`

- **GET /api/devops**
  - Description: Retrieve DevOps information.
  - Parameters: None
  - Response: `200 OK` with the DevOps information

---

### GenericRestController

**Base URL:** `/api/generic`

- **GET /api/generic**
  - Description: Retrieve generic information.
  - Parameters: None
  - Response: `200 OK` with the generic information

---

### HeartBeatRestController

**Base URL:** `/api/heartbeat`

- **GET /api/heartbeat**
  - Description: Check the heartbeat status.
  - Parameters: None
  - Response: `200 OK` indicating the service is alive

---

### LanguageRestController

**Base URL:** `/api/languages`

- **GET /api/languages**

  - Description: Retrieve all languages.
  - Parameters: None
  - Response: `200 OK` with a list of languages

- **GET /api/languages/{id}**

  - Description: Retrieve a language by its ID.
  - Parameters:
    - `id` (path) - The ID of the language to retrieve
  - Response: `200 OK` with the language details

- **POST /api/languages**

  - Description: Create a new language.
  - Parameters:
    - `language` (body) - The language object to create
  - Response: `201 Created` with the created language

- **PUT /api/languages/{id}**

  - Description: Update an existing language.
  - Parameters:
    - `id` (path) - The ID of the language to update
    - `language` (body) - The updated language object
  - Response: `200 OK` with the updated language

- **DELETE /api/languages/{id}**
  - Description: Delete a language by its ID.
  - Parameters:
    - `id` (path) - The ID of the language to delete
  - Response: `204 No Content`

---

### LevelRestController

**Base URL:** `/api/levels`

- **GET /api/levels**

  - Description: Retrieve all levels.
  - Parameters: None
  - Response: `200 OK` with a list of levels

- **GET /api/levels/{id}**

  - Description: Retrieve a level by its ID.
  - Parameters:
    - `id` (path) - The ID of the level to retrieve
  - Response: `200 OK` with the level details

- **POST /api/levels**

  - Description: Create a new level.
  - Parameters:
    - `level` (body) - The level object to create
  - Response: `201 Created` with the created level

- **PUT /api/levels/{id}**

  - Description: Update an existing level.
  - Parameters:
    - `id` (path) - The ID of the level to update
    - `level` (body) - The updated level object
  - Response: `200 OK` with the updated level

- **DELETE /api/levels/{id}**
  - Description: Delete a level by its ID.
  - Parameters:
    - `id` (path) - The ID of the level to delete
  - Response: `204 No Content`

---

### MeasureRestController

**Base URL:** `/api/measures`

- **GET /api/measures**

  - Description: Retrieve all measures.
  - Parameters: None
  - Response: `200 OK` with a list of measures

- **GET /api/measures/{id}**

  - Description: Retrieve a measure by its ID.
  - Parameters:
    - `id` (path) - The ID of the measure to retrieve
  - Response: `200 OK` with the measure details

- **POST /api/measures**

  - Description: Create a new measure.
  - Parameters:
    - `measure` (body) - The measure object to create
  - Response: `201 Created` with the created measure

- **PUT /api/measures/{id}**

  - Description: Update an existing measure.
  - Parameters:
    - `id` (path) - The ID of the measure to update
    - `measure` (body) - The updated measure object
  - Response: `200 OK` with the updated measure

- **DELETE /api/measures/{id}**
  - Description: Delete a measure by its ID.
  - Parameters:
    - `id` (path) - The ID of the measure to delete
  - Response: `204 No Content`

---

### MetricsRestController

**Base URL:** `/api/metrics`

- **GET /api/metrics**

  - Description: Retrieve all metrics.
  - Parameters: None
  - Response: `200 OK` with a list of metrics

- **GET /api/metrics/{id}**

  - Description: Retrieve a metric by its ID.
  - Parameters:
    - `id` (path) - The ID of the metric to retrieve
  - Response: `200 OK` with the metric details

- **POST /api/metrics**

  - Description: Create a new metric.
  - Parameters:
    - `metric` (body) - The metric object to create
  - Response: `201 Created` with the created metric

- **PUT /api/metrics/{id}**

  - Description: Update an existing metric.
  - Parameters:
    - `id` (path) - The ID of the metric to update
    - `metric` (body) - The updated metric object
  - Response: `200 OK` with the updated metric

- **DELETE /api/metrics/{id}**
  - Description: Delete a metric by its ID.
  - Parameters:
    - `id` (path) - The ID of the metric to delete
  - Response: `204 No Content`

---

### ModuleRestController

**Base URL:** `/api/modules`

- **GET /api/modules**

  - Description: Retrieve all modules.
  - Parameters: None
  - Response: `200 OK` with a list of modules

- **GET /api/modules/{id}**

  - Description: Retrieve a module by its ID.
  - Parameters:
    - `id` (path) - The ID of the module to retrieve
  - Response: `200 OK` with the module details

- **POST /api/modules**

  - Description: Create a new module.
  - Parameters:
    - `module` (body) - The module object to create
  - Response: `201 Created` with the created module

- **PUT /api/modules/{id}**

  - Description: Update an existing module.
  - Parameters:
    - `id` (path) - The ID of the module to update
    - `module` (body) - The updated module object
  - Response: `200 OK` with the updated module

- **DELETE /api/modules/{id}**
  - Description: Delete a module by its ID.
  - Parameters:
    - `id` (path) - The ID of the module to delete
  - Response: `204 No Content`

---

### NetworkRestController

**Base URL:** `/api/networks`

- **GET /api/networks**

  - Description: Retrieve all networks.
  - Parameters: None
  - Response: `200 OK` with a list of networks

- **GET /api/networks/{id}**

  - Description: Retrieve a network by its ID.
  - Parameters:
    - `id` (path) - The ID of the network to retrieve
  - Response: `200 OK` with the network details

- **POST /api/networks**

  - Description: Create a new network.
  - Parameters:
    - `network` (body) - The network object to create
  - Response: `201 Created` with the created network

- **PUT /api/networks/{id}**

  - Description: Update an existing network.
  - Parameters:
    - `id` (path) - The ID of the network to update
    - `network` (body) - The updated network object
  - Response: `200 OK` with the updated network

- **DELETE /api/networks/{id}**
  - Description: Delete a network by its ID.
  - Parameters:
    - `id` (path) - The ID of the network to delete
  - Response: `204 No Content`

---

### NotificationTemplateRestController

**Base URL:** `/api/notificationtemplates`

- **GET /api/notificationtemplates**

  - Description: Retrieve all notification templates.
  - Parameters: None
  - Response: `200 OK` with a list of notification templates

- **GET /api/notificationtemplates/{id}**

  - Description: Retrieve a notification template by its ID.
  - Parameters:
    - `id` (path) - The ID of the notification template to retrieve
  - Response: `200 OK` with the notification template details

- **POST /api/notificationtemplates**

  - Description: Create a new notification template.
  - Parameters:
    - `notificationTemplate` (body) - The notification template object to create
  - Response: `201 Created` with the created notification template

- **PUT /api/notificationtemplates/{id}**

  - Description: Update an existing notification template.
  - Parameters:
    - `id` (path) - The ID of the notification template to update
    - `notificationTemplate` (body) - The updated notification template object
  - Response: `200 OK` with the updated notification template

- **DELETE /api/notificationtemplates/{id}**
  - Description: Delete a notification template by its ID.
  - Parameters:
    - `id` (path) - The ID of the notification template to delete
  - Response: `204 No Content`

---

### ProbeRestController

**Base URL:** `/api/probes`

- **GET /api/probes**

  - Description: Retrieve all probes.
  - Parameters: None
  - Response: `200 OK` with a list of probes

- **GET /api/probes/{id}**

  - Description: Retrieve a probe by its ID.
  - Parameters:
    - `id` (path) - The ID of the probe to retrieve
  - Response: `200 OK` with the probe details

- **POST /api/probes**

  - Description: Create a new probe.
  - Parameters:
    - `probe` (body) - The probe object to create
  - Response: `201 Created` with the created probe

- **PUT /api/probes/{id}**

  - Description: Update an existing probe.
  - Parameters:
    - `id` (path) - The ID of the probe to update
    - `probe` (body) - The updated probe object
  - Response: `200 OK` with the updated probe

- **DELETE /api/probes/{id}**
  - Description: Delete a probe by its ID.
  - Parameters:
    - `id` (path) - The ID of the probe to delete
  - Response: `204 No Content`

---

### TenantAdministratorRestController

**Base URL:** `/api/tenantadmins`

- **GET /api/tenantadmins**

  - Description: Retrieve all tenant administrators.
  - Parameters: None
  - Response: `200 OK` with a list of tenant administrators

- **GET /api/tenantadmins/{id}**

  - Description: Retrieve a tenant administrator by their ID.
  - Parameters:
    - `id` (path) - The ID of the tenant administrator to retrieve
  - Response: `200 OK` with the tenant administrator details

- **POST /api/tenantadmins**

  - Description: Create a new tenant administrator.
  - Parameters:
    - `tenantAdministrator` (body) - The tenant administrator object to create
  - Response: `201 Created` with the created tenant administrator

- **PUT /api/tenantadmins/{id}**

  - Description: Update an existing tenant administrator.
  - Parameters:
    - `id` (path) - The ID of the tenant administrator to update
    - `tenantAdministrator` (body) - The updated tenant administrator object
  - Response: `200 OK` with the updated tenant administrator

- **DELETE /api/tenantadmins/{id}**
  - Description: Delete a tenant administrator by their ID.
  - Parameters:
    - `id` (path) - The ID of the tenant administrator to delete
  - Response: `204 No Content`

---

### TenantRestController

**Base URL:** `/api/tenants`

- **GET /api/tenants**

  - Description: Retrieve all tenants.
  - Parameters: None
  - Response: `200 OK` with a list of tenants

- **GET /api/tenants/{id}**

  - Description: Retrieve a tenant by its ID.
  - Parameters:
    - `id` (path) - The ID of the tenant to retrieve
  - Response: `200 OK` with the tenant details

- **POST /api/tenants**

  - Description: Create a new tenant.
  - Parameters:
    - `tenant` (body) - The tenant object to create
  - Response: `201 Created` with the created tenant

- **PUT /api/tenants/{id}**

  - Description: Update an existing tenant.
  - Parameters:
    - `id` (path) - The ID of the tenant to update
    - `tenant` (body) - The updated tenant object
  - Response: `200 OK` with the updated tenant

- **DELETE /api/tenants/{id}**
  - Description: Delete a tenant by its ID.
  - Parameters:
    - `id` (path) - The ID of the tenant to delete
  - Response: `204 No Content`

---

### ThingRestController

**Base URL:** `/api/things`

- **GET /api/things**

  - Description: Retrieve all things.
  - Parameters: None
  - Response: `200 OK` with a list of things

- **GET /api/things/{id}**

  - Description: Retrieve a thing by its ID.
  - Parameters:
    - `id` (path) - The ID of the thing to retrieve
  - Response: `200 OK` with the thing details

- **POST /api/things**

  - Description: Create a new thing.
  - Parameters:
    - `thing` (body) - The thing object to create
  - Response: `201 Created` with the created thing

- **PUT /api/things/{id}**

  - Description: Update an existing thing.
  - Parameters:
    - `id` (path) - The ID of the thing to update
    - `thing` (body) - The updated thing object
  - Response: `200 OK` with the updated thing

- **DELETE /api/things/{id}**
  - Description: Delete a thing by its ID.
  - Parameters:
    - `id` (path) - The ID of the thing to delete
  - Response: `204 No Content`

---

### ThingTypeRestController

**Base URL:** `/api/thingtypes`

- **GET /api/thingtypes**

  - Description: Retrieve all thing types.
  - Parameters: None
  - Response: `200 OK` with a list of thing types

- **GET /api/thingtypes/{id}**

  - Description: Retrieve a thing type by its ID.
  - Parameters:
    - `id` (path) - The ID of the thing type to retrieve
  - Response: `200 OK` with the thing type details

- **POST /api/thingtypes**

  - Description: Create a new thing type.
  - Parameters:
    - `thingType` (body) - The thing type object to create
  - Response: `201 Created` with the created thing type

- **PUT /api/thingtypes/{id}**

  - Description: Update an existing thing type.
  - Parameters:
    - `id` (path) - The ID of the thing type to update
    - `thingType` (body) - The updated thing type object
  - Response: `200 OK` with the updated thing type

- **DELETE /api/thingtypes/{id}**
  - Description: Delete a thing type by its ID.
  - Parameters:
    - `id` (path) - The ID of the thing type to delete
  - Response: `204 No Content`

---

### UserMeRestController

**Base URL:** `/api/userme`

- **GET /api/userme**

  - Description: Retrieve the current user's details.
  - Parameters: None
  - Response: `200 OK` with the current user details

- **PUT /api/userme**

  - Description: Update the current user's details.
  - Parameters:
    - `user` (body) - The user object with updated details
  - Response: `200 OK` with the updated user details

- **DELETE /api/userme**
  - Description: Delete the current user's account.
  - Parameters: None
  - Response: `204 No Content`

---

### UserRestController

**Base URL:** `/api/users`

- **GET /api/users**

  - Description: Retrieve all users.
  - Parameters: None
  - Response: `200 OK` with a list of users

- **GET /api/users/{id}**

  - Description: Retrieve a user by their ID.
  - Parameters:
    - `id` (path) - The ID of the user to retrieve
  - Response: `200 OK` with the user details

- **POST /api/users**

  - Description: Create a new user.
  - Parameters:
    - `user` (body) - The user object to create
  - Response: `201 Created` with the created user

- **PUT /api/users/{id}**

  - Description: Update an existing user.
  - Parameters:
    - `id` (path) - The ID of the user to update
    - `user` (body) - The updated user object
  - Response: `200 OK` with the updated user

- **DELETE /api/users/{id}**
  - Description: Delete a user by their ID.
  - Parameters:
    - `id` (path) - The ID of the user to delete
  - Response: `204 No Content`

---
