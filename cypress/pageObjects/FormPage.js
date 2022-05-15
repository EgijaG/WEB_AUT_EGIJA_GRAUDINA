import BasePage from "./BasePage";

class FormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }
  static get firstName() {
    return cy.get("#firstName");
  }
  static get lastName() {
    return cy.get("#lastName");
  }
  static get email() {
    return cy.get("#userEmail");
  }
  static get controlSelections() {
    return cy.get(".custom-control>label");
  }
  static get dateOfBirth() {
    return cy.get("#dateOfBirthInput");
  }
  static get selectMonth() {
    return cy.get(".react-datepicker__month-select");
  }
  static get selectYear() {
    return cy.get(".react-datepicker__year-select");
  }
  static get selectDay() {
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }
  static get subjectField() {
    return cy.get("#subjectsContainer");
  }
  static get imgUpload() {
    return cy.get("#uploadPicture");
  }
  static get address() {
    return cy.get("#currentAddress");
  }
  static get stateSelect() {
    return cy.get("#state");
  }
  static get citySelect() {
    return cy.get("#city");
  }
  static get submitBtn() {
    return cy.get("#submit");
  }
  static get userNum() {
    return cy.get("#userNumber");
  }
  static get table() {
    return cy.get("tbody>tr>td");
  }
  static get closeModal() {
    return cy.get("#closeLargeModal");
  }
}
export default FormPage;
