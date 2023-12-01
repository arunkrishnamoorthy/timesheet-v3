using {ordina.timesheet.projectcodes.db as projectcodes} from '../db/project-codes';
using {YY1_DUMMYPROJECT_CDS as DummyProject} from './external/YY1_DUMMYPROJECT_CDS';
using {YY1_DUMMYPROJECTTIME3_CDS as Time} from './external/YY1_DUMMYPROJECTTIME3_CDS';
using {YY1_PROJECTSTAFFING_2_CDS as Staffing} from './external/YY1_PROJECTSTAFFING_2_CDS';

service ProjectCodes @(path: '/timesheet/projectcodes') {
    /**
     * Project codes
     */
    @cds.persistence.skip: true
    entity ProjectCodes          as projection on projectcodes.PROJECT_CODE actions {
        @sap.applicable.path: 'WBS_ELEMENT'
        action CopyAssignment(
        PROJECT_ID: String @UI.Hidden @UI.ParameterDefaultValue: in.ID,
        TIME_ID: String @UI.Hidden @UI.ParameterDefaultValue: in.TIME_UUID,
        PERSON_NUMBER : String  @UI.Hidden  @UI.ParameterDefaultValue:in.PERSON_NUMBER,
        CUSTOMER : String  @UI.Hidden  @UI.ParameterDefaultValue:in.CUSTOMER,
        FIRST_DATE : Date  @UI.Hidden  @UI.ParameterDefaultValue:in.FIRST_DAY,
        

        @title:'WBS Element'
        @Common:{ValueList: {
            $Type                       : 'Common.ValueListType',
            CollectionPath              : 'YY1_PROJECTSTAFFING_2',          
                                  Parameters                  : [
                                      {
                                          $Type            : 'Common.ValueListParameterIn',
                                          LocalDataProperty: PERSON_NUMBER,
                                          ValueListProperty: 'EmploymentInternalID',
                                      },
                                      {
                                          $Type            : 'Common.ValueListParameterIn',
                                          LocalDataProperty: FIRST_DATE,
                                          ValueListProperty: 'StartDate',
                                      },
                                      {
                                          $Type            : 'Common.ValueListParameterIn',
                                          LocalDataProperty: FIRST_DATE,
                                          ValueListProperty: 'EndDate',
                                      },
                                      {
                                          $Type            : 'Common.ValueListParameterInOut',
                                          LocalDataProperty: WBS_ELEMENT,
                                          ValueListProperty: 'WorkPackage',
                                      },
                                      {
                                          $Type            : 'Common.ValueListParameterDisplayOnly',
                                          ValueListProperty: 'WorkPackageName',
                                      },
                                      {
                                          $Type            : 'Common.ValueListParameterDisplayOnly',
                                          ValueListProperty: 'WBSElementInternalID',
                                      }
                                  ]
                              }, }
                              WBS_ELEMENT : String);
    };

    @cds.persistence.skip: true
    entity Customers             as projection on projectcodes.CUSTOMERS;

    @cds.persistence.skip: true
    entity Employees             as projection on projectcodes.EMPLOYEES;

    @cds.persistence.skip: true
    entity Projects              as projection on projectcodes.PROJECTS;

    @cds.persistence: {
        table,
        skip: true
    }
    @cds.autoexpose
    entity YY1_DUMMYPROJECT      as projection on DummyProject.YY1_DUMMYPROJECT;

    @cds.persistence: {
        table,
        skip: true
    }
    @cds.autoexpose
    entity YY1_DUMMYPROJECTTIME3 as projection on Time.YY1_DUMMYPROJECTTIME3;

    @cds.persistence.skip: true
    entity YY1_PROJECTSTAFFING_2 as projection on Staffing.YY1_ProjectStaffing_2;

    function exportSuperlock() returns String;
}
