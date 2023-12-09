using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(
   
   UI.LineItem#managedlocked: [
   {
      $Type : 'UI.DataFieldForAction',
      Action: 'superlockService.UnlockToLocked',
      Label : 'Set as Superlock'
   },
   {
      $Type : 'UI.DataFieldForAction',
      Action: 'superlockService.EntityContainer/SuperLockAll',
      Label : 'SuperLock All'
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

annotate service.EmployeeData with @(
   UI.SelectionVariant#managesvlocked: {
      Text: 'Locked',
        SelectOptions: [
            {
                PropertyName: 'LockStatus',
                Ranges: [
                    {
                        Sign : #I,
                        Option: #EQ,
                        Low: 'L'
                    }
                ]
            }
        ]
   }
);



annotate service.EmployeeData with @(
   UI.PresentationVariant#managepvlocked: { 
      Visualizations: ['@UI.LineItem#managedlocked']
   }
);


annotate service.EmployeeData with @(
   UI.SelectionPresentationVariant#managespvlocked: {
      Text: 'Locked',
      SelectionVariant: ![@UI.SelectionVariant#managesvlocked],
      PresentationVariant: ![@UI.PresentationVariant#managepvlocked]
   }
);