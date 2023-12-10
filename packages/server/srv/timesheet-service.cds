using {ordina.timesheet.mytimesheet.db as timesheet } from '../db/my-timesheet';

service mytimesheetservice @(path: '/timesheet/mytimesheet') { 
    entity Projects as projection on timesheet.Projects;
    entity DummyProjects as projection on timesheet.DummyProjects;
    entity GeneralProjects as projection on timesheet.General;
};
