import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { SIGNIN } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as signupPage from "@tests/pages/signup.page";
import * as assert from "@helpers/asserts";
import { RANDOM_STRINGS } from "../data/register.data";
import { SIGNUP } from "@tests/const/routes";
import { emailField, loginBTN, signInBtn } from "../pages/login.page";

describe("Login", () => {
    beforeEach(() => {
        cy.visit(route.BASE_URL.LOGIN + SIGNIN.signIn);
    });

    it.only("Login with valid data", () => {
        element.clearAndFillField(loginPage, emailField, "akmalrivai06@getMaxListeners.com");
        element.clearAndFillField(loginPage, passwordField, "b3417ela");
        cy.contains('button', 'Sign In').click();
    });

    it("Login with invalid email", () => {
        element.clearAndFillField(loginPage, emailField, "invalid-email");
        element.clearAndFillField(loginPage, passwordField, "123456");
        signInBtn.click();
        assert.assertTextContains(element.ERROR_MESSAGE, "Please enter a valid email address.");
    });

});

