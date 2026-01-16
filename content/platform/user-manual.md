# User Manual

This page is intended to give an overview of the Sensoworks platform and explain to the end user how to use it.

## Index

1. Context and Nomenclature
2. User Management
3. Networks
4. Notifications
5. Settings
6. Configurations
7. Edges

## 1. Context and Nomenclature

The Sensoworks platform is used to centralize the monitoring and control of IoT devices connected to it. The main use is to visualize raw data or build dashboards from which to extract insights. A brief introduction to the nomenclature used in the Sensoworks ecosystem:

- **Tenant**: An instance of the application that serves a specific group of users with shared privileges. Each tenant operates in a logically isolated environment.

- **Network**: Represents a physical structure like a bridge, building, or specific area. It encompasses various infrastructural elements monitored by the platform.

- **Thing**: A node that groups a set of sensors. It can be identified as an infrastructural element like a pylon or arch, or as a control unit.

- **Device**: The sensor itself, responsible for collecting specific data for monitoring purpose.


## 2. User Management

### Overview

User is an entity that can log in to the Sensoworks IIoT Platform web interface, configure the environment, access devices and other entities if they have permissions to do so. Users are grouped into user roles.

By default, there are two auto generated user groups: the Tenant Administrators and the Tenant Users. Tenant Administrator can directly create new users and roles, including Tenant Users and has complete control over the system.  

### Roles and permissions

You can create your own custom roles accessing the “Roles and permissions” page available under “Users management” menu.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcwL_u_Ogn4I4hzoqcM4ehblPmg57j7lC3fn-vr8hSnSI2j3WyWzga3a_leYP4wmOcPq1S-4lOB3dFj0vi_CXTn5DnPNGaFjYzeE9T1lxe7vKlZ_6tvsZa90AHgSMZffA7n_mvA657p2idZR3Jblvvcr15A?key=AWA2b8_E7XrQazNlJ-X87w)

Sensoworks IIoT Platform allows you to create your own roles by clicking on the “+ Role” button in the top right corner. A role is made of a “Role Name” and “Description”.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcPtqnkXlXZ1ucUfANODDOdaFDButppxKvNSNa2cvDMLxpGOiQBl4ZMzJtUBUyaqR0vE0pJscTthoBX7bdBL1SWwHgRyzcRnnvo6-8cAK3SRDlXeH7ea5Y-eH9xeHf7v_ptdXZOMl3y3IG_AcyABq_jVqk?key=AWA2b8_E7XrQazNlJ-X87w)

Once a new role is created, you can manage permissions for all the users belonging to that role. You can just click on the role to access all the Sensoworks IIoT Platform available functionalities for which you want to manage permissions.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfXX_xz0Q0lKY9iGF-_QLxr0bpjU6CA2kNC8HwPdOawBOspmhrTEv_GAK9X1rxkQlBsGmCPshfuopEDpVmPjV23EWH2K_X3hXyuxoBeedeWIzURtEllMVsIv82pXO-Kt79lb4dWH0EV9ermo2q7u-uo2eKc?key=AWA2b8_E7XrQazNlJ-X87w)

Managing permissions is quite simple. What you need to do is, for each Feature in a specific Module, enable or disable the permission. Permissions include Create, Read, Update, Delete.

Once you set permissions you can click on Save to apply the changes to that role.

### Users

You can manage your users in Users page by clicking on “Users management” item on the left menu bar, then clicking on “Users”.
  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfmr7pE82iPd2BxZH9rYoqQqVgQ0CaraoOK5VYx2rL8roaOu6Vs37fd7ofmxa3GMIbT_Kolf1zz3KxdNZ74S77toqhPLnJzLt2yjtwGk6Fqo1z0R9Cl-kEdjj6WafXpn9rabDAdogg9FvovfuUG-fpdLiAh?key=AWA2b8_E7XrQazNlJ-X87w)

  
To create a new user just click on the “+ User” button in the top right corner. You can assign a Role and  insert the Email address that will be the user name for that user needed to login.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeg1_rO063MydXoJkwEZYWvj4PW0GFuaP-HOuTIjUse7fj-yBo8ITNhFLsmwT9HoRv2JtnycCHtIn0yR89eWuo8zIBOW0sI_sL3cDuOA2sEAXDd9sCxhK6mnLcAbpDcv-a3hTkNRRLTmv2MR1qwl7rTP8H0?key=AWA2b8_E7XrQazNlJ-X87w)

Click on Save at the end.

## 3. Networks

This is the home page after the user is logged in. You can see a list of networks and their geolocation (set during creation).
Included in the table is information such as the id of the network in the Sensoworks system, its assigned name, and the number of associated things and devices. From the corresponding menu (the 3 dots in each row) it is possible to change some information regarding the network such as the name, the time to live (or TTL, which defines the retention of data in the platform), and whether or not to enable autoprovisioning (the functionality of the platform to create the registry of a new device the moment the first data is received without the need to have created it manually beforehand.  From the same menu, it is also possible to assign users (previously created by the Tenant admin) to the following network or navigate directly to that network's dashboard page.
##### Creating a Network

The wizard asks you to create a Network. A Network represents a set of Things. A Thing represents a set of devices.

|                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFRw1aokaL3oI4nTftka-DnVtM4xTajD-XSYiDxOb9HVXYwxRuuXwbfRNKULc-cim2pb9l1lviHZwH1XgPvUANee83rX4N3EG2Q-LHG5dxNiNr81Ox0TSLriBBdI1KYxei7GgHl3M6_jktHeqoNt8gMCoU?key=AWA2b8_E7XrQazNlJ-X87w) | ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfku4r_NmbctFjLzPnBg8N7RERJ77JhOpE2zXsRR6Kb9LFgaJEjpDBro5y7AP7xXDXNB2T0-Ysv6AGQsKc0_bK9xhXtJfv6KI3QtL79224vHVqt-t0qhhvySMJ6mbI6e4TddSXzeBmA-MRriy0eqqY59trE?key=AWA2b8_E7XrQazNlJ-X87w) | ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdYB1HQkVOBH9QKY03VMZCP2-Q322rcmOINffdR1tfWmOEn9NOBJ97UhsYHs4yKMfptJPkDqqp8DtLK10RLXr6aJxYcShAHr0YXPTkbkd9yqQhLPx09SpTTonPNwytBBec8zCiGlC3bbJVhHZUHqjXrb2hk?key=AWA2b8_E7XrQazNlJ-X87w) |

Once you click on “save” a Network called “Golden Gate Bridge” is created.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdRhe9hageibd-xoeJpaDoohyLK-2PT8bnBklhGIJERNE_M9Am-ucTzQNPu8deaniAFKNUKwKPtUsMeXCiq_NBM7OMqxciTI7pz_YMY-XpD5gw-QuF3XFjwi3eFPzZls11z4kFIenYzRYr9Mc-uYnQkVPY?key=AWA2b8_E7XrQazNlJ-X87w)
  
As you can see the Network “Golden Gate Bridge” is located on Golden Gate Bridge, San Francisco and has no Thing nor Devices attached to it. (columns “T” and “D” are 0).
##### Creating a Thing

Creating a Thing called “span” inside the Network “Golden Gate Bridge” is quite easy. You can follow this steps:

- click on the name of the new Network created “Golden Gate Bridge”;
    
- click on the "+" icon in the top right corner, then “Thing”;
    
- assign a Physical ID, we use “span” as mentioned before;
    
- click on Save.
  
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeD1f-EthgC2bhywwV41H4nVXtQVboewbDpuFKgotMarON7QKrradyiVp0FROih_VlttWsgt8D9O4TxtxERF2NuU61-B2_dsfmq6r7ctQUJwZTEGWNA-jJ1PibJzRT0px_UAmpYXCDUMlVK_UAYG-FmPggK?key=AWA2b8_E7XrQazNlJ-X87w)
Once you click on Save, a Thing called “span” is attached to the Network “Golden Gate Bridge”.


![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdU86ug2vOn7ns3vmY57SA29ScL9sedfv0tLcWfSUhFx05Oncg1K8Z6gUuBjOsgDlmX850vl4k86MeVbQbYIiOy5cqjPtnXSPIqgwmIvm-aMNoL3AtimY3LgK5E7uuKxX7B_Tel3Wz4hpi5l4WODCgN9ejd?key=AWA2b8_E7XrQazNlJ-X87w)

Remember to enable the Thing by clicking on the toggle “Enabled”.

For the moment we leave aside the concept of "Type". It is not relevant for this example. 

##### Creating a Device

For the purpose of this example we’ll create three devices called “acc_1”, “acc_2”, “acc_3” that represent three accelerometers.You can follow these steps:

1. click on the name of the new Thing created “span”;
    
2. click on the "+" icon in the top right corner, then “Sensor”;
    
3. assign a Physical ID, we use “acce_1” as mentioned before;
    
4. click on Save;
 
  
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeSCxuzSYOBOkiba0h26kK3VgK-BGZyudWgj7VrDd1tqWKmqo3KWNoXD7eq_xWuYgVCpnwMUdngCzKzV9gAEiAt1R8uujfmlse9h7EyUc-uDhKvebHJ2bog09FqOmKSXANQ1FREf4To3cqqUsJmrXyQsos?key=AWA2b8_E7XrQazNlJ-X87w)

Repeat steps 2 to 4 to create the other two devices. Assign them a Physical ID like “acc_2” and “acc_3”.

As a result of creating three devices we can see them attached to the Thing “span”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf9ed3VblUaBgNxlBE0L_N_J-8ZC-ae0UVL7fwDMbxG6F6LyWfPHimTCWiArQnRaj3I_JNU7PlAfVnDtLKMBq68gNkfmitiRBOPRJ0FRpjd4XPeuRl1buoSvkWWpp-pxYLhXRh5ExMnd9HjUQEqcYs8lCc?key=AWA2b8_E7XrQazNlJ-X87w)

  
Remember to enable the devices by clicking on the toggle “Enabled” of each one.
##### Enabling auto provisioning

Sensoworks IIoT Platform supports the Auto Provisioning functionality that allows you to avoid defining the payload structure.

You can enable Auto Provisioning as follow:

- return to the “Networks” section by clicking on “Networks” menu item on the left menu bar. ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdh5qds3rpjZgE0obldmhr67XyMBlTaQbk5GY4aRbaS0qqZifYjtmpIp98sr-94gGl2o2K6TEMw1eAAJ2lyOWNtVTAuwbld-4h8F2TlH0OVRyk_M98dowKK2vyeIqdKH-L79Mae5NwNQLmsJXytORvFGfXr?key=AWA2b8_E7XrQazNlJ-X87w)
    
- click on “Golden Gate Bridge” Network context menu, then “Autoprovisioning” and confirm;

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4Kn_XMKMVUbTEJkIYGvdzEcVf-X7vfQYvmt3BXajDJNEVKvNkrkyDnT_GeEZGamX7ACQN7NEiA6cN8Qdrd0hA9Gxx4Rnv_tS7-FBBhK8WbJH7--j1DtW7TqeAW9pwzbLWVCtvW9Xy7PFxeR-t2Zk6wgg?key=AWA2b8_E7XrQazNlJ-X87w)


Thanks to the Auto Provisioning functionality you can start sending data from your accelerometers!

## 4. Notifications


## 5. Settings



## 6. Configurations
### Customize Theme

To configure your company or product logo and colour scheme, go to the “Configuration” page, then click on “Theme”.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcXErpBkuF81VCnp9wPnJLTDasrDbfQpOgWicMHbGuVraebpLEjwU_76pPdchH0VLaWVbIvo2u-QQFQ_JYTaqyfJy9JKPeCfNyHLjQBgIdyfDtUrSKPa1ykV8HJILIFMeonGIkJ5xUsCrrUrAHmgibhXfXw?key=AWA2b8_E7XrQazNlJ-X87w)

  
By clicking on the pencil icon you can upload your logo, brand and favicon. You can also change color by setting hex code or just picking it through color picker.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfAJKgXU3pGzXooHxeD7GrRZhHqAtjor2Z7RcSCTGKVJg28P3b51jNULDETwMtOjVc0hkYWc66W4gGpXY4X2rehbneXcQIQturbXMKIwLSuoK_BG6wLL8JZUbMgNcATVfqK0BEKkjn74xf6i39mKu1Vg2-O?key=AWA2b8_E7XrQazNlJ-X87w)

You can name your theme in the Name field and click on Save.

  

### Global Aliases

In the Global Aliases section you can configure translation for Network, Thing and Device. Currently Sensoworks IIoT Platform supports english and italian for translation.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXegpQYQ_YjmA6BdS8ZmHpELeNbbTVlKmFqxsZZmfbtAtyTrGyKndsLmtMAgc2YYDTo9jaC_HEyBW2AAjOpqTQexnUcoZe4rUeRXzQ_HupyIRavH2pwUZFQYTbo8Id6ooMvRO6zvvsc3eqD6fUV8mr6erLuR?key=AWA2b8_E7XrQazNlJ-X87w)

Global Aliases is used just to translate labels for Network, Thing, Device, in the navigation menu in Sensoworks Desk, the web console.
## Presets

### Overview

Sensoworks’s web console, Desk, allows you to define what we call “presets”. A preset is used to customize an entity with both aliases and parameters. The aliases will replace the default: 'Network', 'Thing', 'Device' naming conventions globally. The parameters are custom fields which an entity will be initialized with.

To access Presets page on Desk you can click on “Configurations” menu item on the left bar, then “Presets”.
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdZ8FGx9XbQ18wKgu_PqFN78zw8iZTr1d7Tu7h5BIaUpM2ycXLYmcKZOnAZceXTbnYivLzyA1QNlSD3OoLxsM6Bp3897QcPuTtbLgqdqrXC882UTYRw44liQezSMuB_KTGrN9znxZDXFQcbTbgE9sCuvMM?key=AWA2b8_E7XrQazNlJ-X87w)

The image above shows a list of Presets defined on a demo environment. If it’s the first time you access this page on a fresh installation, this page is empty. You can proceed on the next sections to configure presets for Network, Thing and Device.

  

### Create a new preset

To create a new preset just click on the “+ Preset” button in the top right corner.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcFWM9Gg0I71MsX_Mw6u0k36WdDAMdwM8JJJ0r5SI9v6kadE3rW4CA7bp0DKPdBL8SA8zxjYqG1sJlvwhnohj6IxFtWQejAdbKdllt_bP65-SWpfS0QzLPRjWXNsSibOXpRmEB0sF9PKwWTgusIp-j4NAfK?key=AWA2b8_E7XrQazNlJ-X87w)

Under “Preset type” choose if you want to create a preset for a Network, a Thing or a Device. In this example we are creating a preset called “Bridge” for a Network. Click on Save to create the preset.
### Change default color

Once you create the preset “Bridge” for a Network, you can change its color by clicking on the white circle on the top left side corner of the preset card. Then you can select the color you prefer.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc_YJHFrY7OaXX_bpFnCeBsOHNFiqgXUmIRiXW9wI4sXkztqkZL0xSFbqdNeb5lvPhxNXtokhgwaN01ubGgXvlVyU4e9qUers_Iue1tkcFkfb6m0Rv2aihZ_vFDGalfhP9Wg1tUrFT1Zpn-xVGzunLhWCFC?key=AWA2b8_E7XrQazNlJ-X87w)

  

### Preset localisation

A preset name can be localised in english or italian. You can click on the hearth icon in the top right corner of the preset card.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcGKKZdYJMTfGh5mji_gGzfH8R_I4_DlOgolTb3HxsKWUDnYLWtyKfYGSIcLL5Wm7GyDZgYZlycqERFqSgr6Qcpuq7pdwFZng2sUdHGAEwCC03QLiNaUb_hnO4O-WMOa-WZ81W_tvMtG9yjf981GeaBafJ3?key=AWA2b8_E7XrQazNlJ-X87w)

Insert the translation you want the system uses to localise the entity, in this case a Network, the preset will be applied to.

  

### Add parameter

Presets allows you to globally define static parameters for entities the preset will be applied to. It’s a sort of custom metadata which cannot be modified except from the console.

By clicking on “add parameter” inside preset card you can define the type of the parameter, its name and its value

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcYJyQb-OlAGdUGVTsit3KNoTLgjgXebgj6iWhYhDfx3tqJ3DmDgMcyUetMFbZu9vTZ_6WL-q4MeGmI55oB75RLMyfzYj8fm6jUf_YHKO8bxpivkmlXVK_jKQBjO4riVXq_aNfSvBGMu9AE_tdBCqzPVPGL?key=AWA2b8_E7XrQazNlJ-X87w)

In the example above we create a Text parameter with name equal to “Manufacturer” and value equal to “STMicroelectronics”. This parameter will be applied to each device to which the preset “Accelerometer” is applied.

### Assign preset to an entity

To assign a preset to an entity, for example to a Network you can follow these steps:

- click on Networks menu item on the left;
    
- click on the context menu for your network, in this example “Golden State Bridge”, then click on Edit.
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd5_-e_j9ES1hOzoKPfOjs3gsvmNti4fqTDYKBLe82gdOzkQDPO7gIL35tahyFnJHgwle0mbaUYCGr_661GIx6gqFIjFpYWxNbxEvmTOkJPNrzFhLfVuBuDRnlmtE9Cvy_AjZ7KbSeJ8dpzeAP4txDDybw?key=AWA2b8_E7XrQazNlJ-X87w)

- you can move until the Configuration step by clicking on next. Once you reach the Configuration step, you can choose your preset in the “Type” combo box. In this example we select the network preset “Bridge” we created before. Then click on save.
    
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4UWsg_emSqhgDJFNSmQpeX9hIj65Y_AeuUI77tUn7rj7Ygv7Kn3N2bGjSdPFCF8RjUhXvu-3gepw4aP2xQ_v1-GN5xSpcXAh0LpbCmsXcYg98I0_MZHpfk2H7kLfj2RfyOpRjWzQ_62tMKzS1rVjrTFA?key=AWA2b8_E7XrQazNlJ-X87w)

As a result of applying the preset Bridge to the network Golden State Bridge you can see a label under the column “Type” for the network in the Networks page.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd78QQ66suEODLruFKdVmsgFLBan8OjNlYK33jGVL9xszPvZlp3BwpLypxFZpQPKnFe2Ese8UTuGIQe2aQH0I4eYm_LIW4qGl1ip85Yu5KM2Cp7K0m-yzl96MdLA_PSQKB6ea9Fc_Dk6kmjxCpzWTmoOOm_?key=AWA2b8_E7XrQazNlJ-X87w)

  
You can apply presets also to Thing and to Devices. For example you want to apply the preset “Accelerometer” that we previously created to the device “acc_1” under the Thing “span” inside the Network “Golden Gate Bridge”. To do so, you can follow these steps:

- in Networks page click on “Golden Gate Bridge” Network;
    
- click on “span” Thing inside the “Golden Gate Bridge” Network to reach the device list.
    
- click on “acc_1” Device then click on “More actions” in the top right corner and click on “Edit”;
    
- select from “Type” combo the “Accelerometer” preset then click on save.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeflHGmDDEdwY8xSFezV5EhS3YuTnfaRvuwlH844ce8tuPvTpOElGs3AAzAWp4EgnvNJ2usRjJcuhfnSMALG9OsMvCNEYRVFHakX2cFC8Ufti5W9-WM9NBTkUPDprwaVmlQ82FUN6I3Mp5UWm_iVRZMqhwu?key=AWA2b8_E7XrQazNlJ-X87w)

As a result of applying the preset Accelerometer to the device “acc_1” you can see a label under the column “Type” for the device in the “span” Thing.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXffCpqOaPhUv522f9ShWZyyKzNVC98KdfY6gnE4ZvH7Y_QG55kqs1dF5ReAAeqYqq_iRcBCMFSqg8rM_ua-VhSS0AdTa6D1pHPtmvzKwVZV8aG8sggg8si37IswD9zwHg2xt4hOjbcf-YqBGlygiraX0b_Y?key=AWA2b8_E7XrQazNlJ-X87w)

## 7. Edges

### Overview

For the data ingestion, edges must be created on the platform. Once an edge is created, it is possibile to send data to the platform with the associated token.

<p align="center"><img src="/docs/images/user-manual/edges-page.png" width="100%" height="100%"></p>

### Edge creation

To create an edge, click on the top-right button "+ Edge" and insert a name. An edge will be created and you can activate or deactivate it by clicking on the 3 dots menu in the corresponding row.

You can copy a token to use in the ingestion API calls by clicking in the "Token" column of every edge row.
