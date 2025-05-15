import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as signupPage from "@tests/pages/signup.page";
import * as assert from "@helpers/asserts";
import { RANDOM_STRINGS } from "../data/register.data";
import { SIGNUP } from "@tests/const/routes";
import { timeout } from "async";

describe("Register", () => {
  beforeEach(() => {
    cy.visit(route.BASE_URL.base_URL + SIGNUP.signup);
  });

  it("Register with valid data", () => {
    element.click(signupPage.signUpBtn);
    element.wait(3000);
    element.clearAndFillField(signupPage.nameField, "Tester name");
    element.click(signupPage.nextBtn);
   
   assert.assertUrlContains('/onboarding?step=2');
   
   element.click(signupPage.jobStatusField);
   element.clickDropDown(signupPage.jobStatusDropDown, "Hired, but open for opportunities");
   element.clearAndFillField(signupPage.emailField, "testerdealls@gmail.com");
   element.clearAndFillField(signupPage.whatsAppNumberField, "081119990082");
   element.clearAndFillField(signupPage.linkedInField, "https://www.linkedin.com/in/akmal-rivai-6a1a1b1b8/");
   element.fillField(signupPage.educationSeacrhField, "University of Indo");
   element.selectRoleOption(signupPage.educationOpion, "University of Indonesia");
   element.click(signupPage.experienceField);
   element.clickDropDown(signupPage.experienceDropdownField, "1 - 3 YoE");
   element.click(signupPage.nextBtn);

   assert.assertUrlContains('/onboarding?step=3');

  //  element.click(signupPage.uploadCVField);
   element.uploadFile(signupPage.cvUploaded, "cypress/fixtures/CV Akmal Rivai.pdf");
   
   element.wait(5000);
   element.click(signupPage.nextBtn);

   assert.assertUrlContains('/onboarding?step=4');

  });
  
});