import {Candidate} from "../../../../src/core/business/candidate/candidate.model";

describe('Create interviw test',()=>{

  let subject: Candidate;
  beforeEach(()=> {
        subject = new Candidate("Hugo", ["JS"],[[yesterday,today]]);
  });

});
