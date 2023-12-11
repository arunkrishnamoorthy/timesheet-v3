### Data Model - Assign Project Codes

The following entity sets are to be modelled as part of the Assign Project codes app. 

### Project Codes
   This entity set is to contain the dataset that is used by the fiori elements, list report application to render the list of stand-in projects available for the employees. 
   The data required are to be fetched from the business object, `YY1_DUMMYPROJECT` and `YY1_DUMMYPROJECTTIME3`. 

#### Entity Type Definitions

##### Entity: Project Codes

This is the main entity that provides the information to the list report template. This entity, source the data from the 
custom implementation on the handler class by reading the necessary information from YY1_DUMMY_PROJECT_CDS and YY1_DUMMY_PROJECT_TIME3_CDS business objects in S4 HANA. 

| **Property**  | **Key** | **Data Type** | **Description**     |
| :------------ | :------ | :------------ | :------------------ |
| ID            | X       | UUID          | Unique Key          |
| CUSTOMER      |         | STRING(10)    | Customer ID         |
| PERSON_NUMBER |         | STRING(8)     | Personal Number     |
| CUSTOMER_NAME |         | STRING(80)    | Customer Name       |
| PROJECT_NAME  |         | STRING(40)    | Project Name        |
| PROJECT_DESC  |         | STRING(80)    | Project Description |
| PERSON_NAME   |         | STRING(80)    | Personal Name       |
| STAND_BY      |         | BOOLEAN       | Stand By            |
| STATUS        |         | STRING(20)    | Status              |
| FIRST_DAY     |         | DATE          | First Date          |
| TIME_UUID     |         | UUID          | Project Time ID     |
| WBS_ELEMENT   |         | STRING        | WBS Element         |


##### Entity: Customer 

This entity provides the value help for the Customers. The data is read from the YY1_DUMMY_PROJECT_CDS business object. 

| **Property** | **Key** | **Data Type** | **Description** |
| :----------- | :------ | :------------ | :-------------- |
| Customer     | X       | String(10)    | Customer        |
| CustomerName |         | String(80)    | Customer Name   |

##### Entity: Employees 

This entity is used to provide the value help information for the Employees. 

| **Property**    | **Key** | **Data Type** | **Description**  |
| :-------------- | :------ | :------------ | :--------------- |
| PersonnelNumber | X       | String(8)     | Personnel Number |
| PersonFullName  |         | String(80)    | Personnel Name   |

##### Entity: Projects 

This entity is used to provide value help for the Project filter. 

| **Property**       | **Key** | **Data Type** | **Description**     |
| :----------------- | :------ | :------------ | :------------------ |
| ProjectName        | X       | String(40)    | Project Name        |
| ProjectDescription |         | String(80)    | Project Description |

##### Entity: Staffing WBS 

This entity provides the value help for the WBS Element selection in the Copy Assignment. 

| **Property**  | **Key** | **Data Type** | **Description**          |
| :------------ | :------ | :------------ | :----------------------- |
| PERSON_NUMBER | X       | String(8)     | Personnel Number         |
| START_DATE    | X       | DATE          | Start Date               |
| WBS_ID        | X       | String(8)     | WBS Element              |
| NAME          |         | String        | Work Package Name        |
| DESCRIPTION   |         | String        | Work Package Description |