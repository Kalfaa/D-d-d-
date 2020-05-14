import {Recruiter} from "../../../../src/core/business/employees/recruiter.model";

describe('Recruiter business test',() => {
    let subject: Recruiter;
    let yesterday: Date = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let today:Date = new Date();

    beforeEach(()=> {
        subject = new Recruiter("OUGO", [],[[yesterday,today]]);
    });

    test('Recruiter isAvailable should return true',()=> {

        let res = subject.isAvailable(yesterday,today);
        expect(res).toBe(true);
    });

    test('Recruiter isAvailable should return false',()=> {
        let threeDay: Date = new Date();
        threeDay.setDate(threeDay.getDate() - 3);
        let res = subject.isAvailable(threeDay,today);
        expect(res).toBe(false);
    });

    test('Recruiter isAvailablee should return false',()=> {
        let threeDay: Date = new Date();
        threeDay.setDate(threeDay.getDate() + 3);
        let res = subject.isAvailable(threeDay,today);
        expect(res).toBe(false);
    });
});
