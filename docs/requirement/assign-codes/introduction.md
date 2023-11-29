### Assign Project Codes

The purpose of the Assign project codes application is to copy the efforts booked by the employee in their respective stand in projects to that of the Actual WBS element that is maintained in the S4 HANA Public clould system, from which the efforts would, later be used for the Booking. 

Following is the features, needs to be implemented as part of the application. 

1. A list-report floorplan of the fiori elements is to be used to display the employess with the details of their stand in projects. 
2. The list should have the capabilities to be sorted/filtered through Project, Customer, or Employee data. 
3. From the list, the user should be able to select one employee and perform an bound action which will open a popup, in which the user will enter the valid WBS element and click on Ok. During this action, the efforts from the Stand In projects must be copied to the selected WBS Element.
4. Once the efforts are copied successfully, then the stand in project must be deleted from the database. 
5. It should also be possible to implement a delete action, where the user selects the employee records and triggers the deletion. The action when executed must delete the stand in project and its time from the database. 
6. During delete operation, a warning must be issued to notify user of possibility of losing the efforts booked in the Stand in Projects. 
