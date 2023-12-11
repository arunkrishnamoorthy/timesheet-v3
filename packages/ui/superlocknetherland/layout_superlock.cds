using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(UI.LineItem#netherlandsuperlocked: [
   {
      $Type : 'UI.DataFieldForAction',
      Action: 'superlockService.UnlockToLocked',
      Label : 'Set as Not Locked'
   },
   {
      $Type : 'UI.DataFieldForAction',
      Action: 'superlockService.LockedToSuperlock',
      Label : 'Set as Locked',
   },
   {
      $Type : 'UI.DataFieldForAction',
      Action: 'superlockService.EntityContainer/UnlockAll',
      Label : 'Set all as Unlocked',
   },
   {
      $Type : 'UI.DataFieldForAction',
      Action: 'superlockService.EntityContainer/LockAll',
      Label : 'Set all as Locked',
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
   UI.SelectionVariant#netherlandsuperlocked: {
      Text: 'Superlocked',
        SelectOptions: [
            {
                PropertyName: 'LockStatus',
                Ranges: [
                    {
                        Sign : #I,
                        Option: #EQ,
                        Low: 'S'
                    }
                ]
            },
            {
                PropertyName: 'Country',
                Ranges: [
                    {
                        Sign : #I,
                        Option: #EQ,
                        Low: 'NL'
                    }
                ]
            }
        ]
   }
);

annotate service.EmployeeData with @(
   UI.PresentationVariant#netherlandsuperlockedpv: {
      Visualizations: ['@UI.LineItem#netherlandsuperlocked']
   }
);

annotate service.EmployeeData with @(
   UI.SelectionPresentationVariant#netherlandsuperlockedspv: {
      Text: 'Superlock',
      SelectionVariant: ![@UI.SelectionVariant#netherlandsuperlocked],
      PresentationVariant: ![@UI.PresentationVariant#netherlandsuperlockedpv]
   }
);