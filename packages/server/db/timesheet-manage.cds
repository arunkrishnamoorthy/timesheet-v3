type Mood: Integer enum {
    good = 0;
    nuetral = 1;
    bad = 2;
}

type lastContactDate: String enum {
    lessThanMonth = '< 1 month';
    lessThanTwoMonths = '<2 month';
    greaterThanTwoMonth = '> 2 month'
}

entity SatisfactionBarometer {
    key UUID : UUID;
    PersonWorkAgreement : Integer;
    month: Integer;
    year: Integer;
    lastContact: lastContactDate;
    mood: Mood;
    comment: String;
}   