// Employee Test Cases
const Employee = require("../lib/Employee");
const { getNotes } = require("./notes");


describe("getNotes", () => {
  const req = jest.fn();
  const res = () => {json: jest.fn(),status: jest.fn()}
  
  const notes = [{
    id: "12345",
    title: "test note",
    text: "notes text"
  }]

  it("should return notes", () => {
    getNotes(req, res);

    expect(res.json).toBeCalledWith(notes)
  });
});

