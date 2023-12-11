using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(UI.LineItem#luxemburglocked: [
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
   UI.SelectionVariant#luxemburglocked: {
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
            },
            {
                PropertyName: 'Country',
                Ranges: [
                    {
                        Sign : #I,
                        Option: #EQ,
                        Low: 'LU'
                    }
                ]
            }
        ]
   }
);

annotate service.EmployeeData with @(
   UI.PresentationVariant#luxemburglockedpv: {
      Visualizations: ['@UI.LineItem#luxemburglocked']
   }
);

annotate service.EmployeeData with @(
   UI.SelectionPresentationVariant#luxemburglockedspv: {
      Text: 'Locked',
      SelectionVariant: ![@UI.SelectionVariant#luxemburglocked],
      PresentationVariant: ![@UI.PresentationVariant#luxemburglockedpv]
   }
);