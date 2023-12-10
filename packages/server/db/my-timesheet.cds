namespace ordina.timesheet.mytimesheet.db;

entity Projects {
    key ID: UUID;
        ProjectName: String(40);
        ProjectDescription: String(100);
}

entity DummyProjects {
    key ID: UUID;
        ProjectName: String(40);
        ProjectDescription: String(80);
}

entity General {
    key ID: UUID;
        ProjectName: String(40);
        ProjectDescription: String(80);
}