const assert = require('chai').assert ;
const sayHello = require("../app").sayHello;
//const app = require("../app");

describe("App", function(){
  it("app should return hello" , function(){
    assert.equal(sayHello(), "hello");

  });

  it("sayHello should be a string", function(){
    assert.typeOf(sayHello(), "string")
  })
});
