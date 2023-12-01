using {YY1_DUMMYPROJECT_CDS as DummyProject} from './external/YY1_DUMMYPROJECT_CDS';
using {YY1_DUMMYPROJECTTIME3_CDS as Time} from './external/YY1_DUMMYPROJECTTIME3_CDS';

service s4cloud @(path: '/timesheet/s4-cloud') {
    
    @cds.autoexpose
    entity YY1_DUMMYPROJECT      as projection on DummyProject.YY1_DUMMYPROJECT;

    @cds.persistence: {
        table,
        exists: true
    }
    @cds.autoexpose
    entity YY1_DUMMYPROJECTTIME3 as projection on Time.YY1_DUMMYPROJECTTIME3;

}