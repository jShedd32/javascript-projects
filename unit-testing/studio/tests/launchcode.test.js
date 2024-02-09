// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check organization", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });
  
  test("check executiveDirector", function(){
  expect(launchcode.executiveDirector).toBe("Jeff");
  });
  
  test("check percentageCoolEmployees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  
  test("check programsOffered has an array with courses", function(){
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe('Data Analysis');
    expect(launchcode.programsOffered[2]).toBe('Liftoff');
  });
  
  test(" check programsOffered has an array of the correct length", function(){
    expect(launchcode.programsOffered.length).toBe(3);
  })
  
  test("check launchOutput is divisible by 2", function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });
  
  test("check launchOutput is divisible by 3", function(){
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });
  
  test("check launchOutput is divisible by 5", function(){
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });
  
  test("check launchOutput is divisible by 2 and 3", function(){
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });
  
  test("check launchOutput is divisible by 3 and 5", function(){
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });
  
  test("check launchOutput is divisible by 2 and 5", function(){
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
  });
  
  test("check launchOutput is divisible by 2,3,and 5", function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });
  
  test("check lauchOutput is not divisible by 2,3,or 5", function(){
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});