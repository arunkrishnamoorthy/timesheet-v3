using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(UI.LineItem#mangesuperlock: [
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
   UI.SelectionVariant#managesvsuperlock: {
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
            }
        ]
   }
);

annotate service.EmployeeData with @(
   UI.PresentationVariant#managepvsuperlock: {
      Visualizations: ['@UI.LineItem#mangesuperlock']
   }
);

annotate service.EmployeeData with @(
   UI.SelectionPresentationVariant#managespvsuperlock: {
      Text: 'Superlock',
      SelectionVariant: ![@UI.SelectionVariant#managesvsuperlock],
      PresentationVariant: ![@UI.PresentationVariant#managepvsuperlock]
   }
);