import FormPage from "../pageObjects/FormPage";

// Final task in Automation testing
context("Elements scenarions", () => {
  context("Automation practice form", () => {
    it("Form fillings", () => {
      FormPage.visit();
      cy.fixture("formText").then((data) => {
        //   Data input & submit
        FormPage.firstName.type(data.name);
        FormPage.lastName.type(data.lastName);
        FormPage.email.type(data.email);
        FormPage.controlSelections.contains(data.gender).click();
        FormPage.userNum.type(data.mobile);
        FormPage.dateOfBirth.click();
        FormPage.selectYear.select("1930");
        FormPage.selectMonth.select("February");
        FormPage.selectDay.click({ force: true });
        FormPage.subjectField.type(data.subject + "{enter}");
        FormPage.controlSelections.contains(data.hobbies).click();
        FormPage.imgUpload.selectFile(data.imgPath);
        FormPage.address.type(data.currentAdd);
        FormPage.stateSelect.type(data.state + "{enter}");
        FormPage.citySelect.type(data.city + "{enter}");
        FormPage.submitBtn.click();

        // Data validation
        FormPage.table
          .should("contain", data.name)
          .should("contain", data.lastName)
          .should("contain", data.email)
          .should("contain", data.gender)
          .should("contain", data.mobile)
          .should("contain", data.subject)
          .should("contain", data.hobbies)
          .should("contain", data.currentAdd)
          .should("contain", data.state)
          .should("contain", data.city)
          .should("contain", data.imgPath.split("/")[2])
          .should("contain", "28 February,1930");
        FormPage.closeModal.click();
      });
    });
  });
});
