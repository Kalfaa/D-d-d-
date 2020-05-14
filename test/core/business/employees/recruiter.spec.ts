import {Recruiter} from "../../../../src/core/business/employees/recruiter.model";

describe('Recruiter business test',() => {
    let subject: Recruiter;
    let yesterday: Date = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let today:Date = new Date();

    beforeEach(()=> {
        subject = new Recruiter("OUGO", [],[[yesterday,today]]);
    });

    test('Show date avabilities',()=> {
        let res = subject.isAvailable(yesterday,today);

         });
});
