describe("User-Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  })

  //GETTERS

  const textInput = () => cy.get("input[name=username");
  const emailInput = () => cy.get("input[name=email");
  const passwordInput = () => cy.get("input[name=password");
  const checkBox = () => cy.get("input[name=tos]");
  const submitBtn = () => cy.get(`button[id="submitBtn"]`);

  it("Sanity check", () => {

    expect(1 + 2).to.equal(3);
    expect(1 + 2).not.equal(5);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  })
  it("Page is displaying correctly"), () => {
    textInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    checkBox().should("exist");
    submitBtn().should("exist");
    foobarInput().should("not.exist");

    cy.contains("Create a new user").should("exist");
    cy.contaons(/create a new user/i).should("exist");
  }

  describe("Adding text and submit", () => {
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost")
    })

    it("can type in the inputs", () => {
      textInput()
        .should("have.value", "")
        .type("Larry")
        .should("have.value", "Larry");

      emailInput()
        .should("have.value", "")
        .type("Larry@gmail.com")
        .should("have.value", "Larry@gmail.com");

      passwordInput()
        .should("have.value", "")
        .type("Larrys")
        .should("have.value", "Larrys");
  

      checkBox()
      .should("have.value", "false")
      .check()
      .should("have.value", "true")
      .uncheck()
      .should("have.value", "false")
    })
  })

     describe("Create a new user", () => {
        it("can submit new user", () => {
          textInput().type("Larry")
          emailInput().type("Larry@gmail.com")
          passwordInput().type("Larrys")
          checkBox().check()
          submitBtn().click();
        })
      })

      describe("Test form Validation", () => {
        it("Errors if requirements not met", () => {
          submitBtn().should("be.disabled");
        })
       
      })
    




















})
