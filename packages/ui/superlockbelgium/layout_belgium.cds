using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with {

   Country
   @UI.HiddenFilter
   @Common: {FilterDefaultValue: 'BE'};
}

annotate service.EmployeeData with @(UI.LineItem#belgium: [
   {
      $Type : 'UI.DataFieldForAction',
      Action: 'superlockService.UnlockToLocked',
      Label : 'Set as Locked'
   },
   {
      $Type            : 'UI.DataField',
      Label            : 'PersonnelNumber',
      Value            : PersonnelNumber,
      ![@UI.Importance]: #High
   },
   {
      $Type            : 'UI.DataField',
      Label            : 'PersonFullName',
      Value            : PersonFullName,
      ![@UI.Importance]: #High
   },

   {
      $Type            : 'UI.DataField',
      Label            : 'CompanyCode',
      Value            : CompanyCode,
      ![@UI.Importance]: #High
   },
   {
      $Type            : 'UI.DataField',
      Label            : 'EmployeeType',
      Value            : EmployeeType,
      ![@UI.Importance]: #High
   },
   {
      $Type            : 'UI.DataField',
      Label            : 'Reason',
      Value            : Reason,
      ![@UI.Importance]: #High
   },
   {
      $Type            : 'UI.DataField',
      Label            : 'Unit',
      Value            : Unit,
      ![@UI.Importance]: #High
   },
   {
      $Type            : 'UI.DataField',
      Label            : 'LockStatus',
      Value            : LockStatus,
      ![@UI.Importance]: #High
   },
   {
      $Type            : 'UI.DataField',
      Label            : 'Availability(Hours)',
      Value            : AvailabilityInHours,
      ![@UI.Importance]: #High
   }
]);
