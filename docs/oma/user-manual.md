---
layout: default
title: OMA User Manual
nav_order: 1
description: "OMA User Manual"
parent: OMA
has_children: false
---

# OMA User Manual

Prerequisites

To perform an OMA analysis on a structural model, you must log in to the console with a user account with permissions to use the OMA module.

At least one Network must be defined, to which the structural model to be analyzed will be associated; the user who will be used to execute the OMA must be associated with this Network.
1. Access the main window of the OMA module

Once logged in with a user enabled to use the OMA module, click the button highlighted by the arrow on the left of the screen.
Screen_01.png

The console will display the main window of the OMA module, which lists the structural models already defined.
Screen_04.png
2. Designation of the structural model to be analyzed

To perform the OMA, it is necessary to select the structural model on which it will be based: it is possible to select one of the already defined models (highlighted in red on the left side of the screen) or create a new one with the New model button (highlighted by the arrow at the top to the right of the screen).

If the desired structural model is already present, simply select it by clicking on its name; in this case, you can immediately move on to Section 3, relating to the launch of the OMA.

Otherwise, you need to continue with the next paragraph.
image-20231018-125301.png
List of defined structural models
2.1. Procedure for creating a structural model

In the main window of the OMA module, click on the New model button. The console will display the following screen.
image-20231018-125348.png
Structural model creation popup

It is necessary to give a name to the OMA model and select the Network associated with the structural model.

It is also necessary to load the files relating to the geometry of the model and the links that connect the different nodes of the structure. The format and content of the files are defined in the following paragraphs.

Finally, it is possible to set the Private flag: if activated, the model will be visible exclusively to the current user.
2.1.1. Structural model geometry file

For the correct functioning of the OMA module it is necessary to compile a file with a .csv extension, in which the geometry information shown below must be inserted.

You can download a sample geometry CSV file:
image-20231018-122702.png
Example of content of a geometry CSV file, displayed within a spreadsheet application (e.g. Excel, Numbers…)

The columns to insert in the file are:

     Node: this column shows the numbering of the nodes on which the sensors are positioned. Furthermore, the numbering of other nodes which will then be necessary for the correct representation of the structure and its modal shape is reported (the movements of the points that are not instrumented are obtained by interpolation by making hypotheses based on the type of structure).

     x [m], y [m], z [m]: in these three columns the X, Y and Z coordinates of the nodes that were specified in the first column are entered.

     Sensor: this column indicates the name of the sensor corresponding to the node in which it is positioned. If the node does not have a sensor, the value of this field should be set to 0.

     x, y, z: these three columns indicate the measurement directions and the direction of the local triad of the instrument compared to the global one adopted by the user.
     It is indicated with 1 if the direction of the axis coincides with that of the global reference system, -1 if the direction is the opposite or 0 if the instrument does not measure in that direction.

     Reg x, Reg y, Reg z: in these fields the indices of the columns in the acceleration file that correspond to the x, y, z accelerometer readings of the sensor indicated in the Sensor column must be indicated.
     If, however, the OMA is performed starting from the telemetry data already acquired, the analysis will be performed on the data in the order of insertion.

2.1.2. Structural model link file

The link file, with .csv extension, indicates how to connect the nodes listed in the previous file, in order to compose the structure to be analysed. The links connect the pair of nodes whose identification numbers are indicated in the line.

You can download a sample CSV file link:
image-20231018-122957.png
Example of content of a link CSV file, displayed within a spreadsheet application (e.g. Excel, Numbers…)

In the file there will be a table with the one-dimensional elements that connect the nodes.

Once the geometry and link files have been selected, the structural model will be saved and made available for analysis.

Note the following graphic elements of the model:

     nodes are represented as green-blue circles;

     links between pairs of nodes are represented as black segments;

     the nodes equipped with sensors are represented