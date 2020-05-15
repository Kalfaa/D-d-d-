import {CandidateRepository} from "../../src/infrastructure/candidate.repository";
import {CandidateMapper} from "../../src/common/mapper/candidate.mapper";
import {CandidateDTO} from "../../src/dto/candidate.dto";

describe('Candidate repository', () => {
  const candidateMapper = new CandidateMapper();
  let repository: CandidateRepository;

  beforeEach(() => {
    repository = new CandidateRepository(candidateMapper);
  });

  it('creates a candidate', () => {
    const availability: [Date, Date] = [new Date(), new Date()];
    const candidate = repository.create("123",["skill"], [availability]);
    console.log(candidate instanceof CandidateDTO);
    expect(candidate).toBeInstanceOf(CandidateDTO);
    expect(candidate.name).toEqual("123");
    expect(candidate.skills).toEqual(["skill"]);
    expect(candidate.availabilities).toEqual([availability]);
  });
});
