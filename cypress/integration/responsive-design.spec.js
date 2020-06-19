describe("responsive design", () => {
  //
  // To reference Ionic default breakpoints, see:
  // https://ionicframework.com/docs/layout/css-utilities#ionic-breakpoints
  //
  // To reference Cypress presets, see:
  // https://docs.cypress.io/api/commands/viewport.html#Arguments
  //

  describe("on phones", () => {
    before(() => {
      cy.visit("/");
    });

    ["portrait", "landscape"].forEach((orientation) => {
      describe(`in ${orientation}`, () => {
        it("should display menu navigation button", () => {
          cy.viewport("iphone-6", orientation);
          cy.get("ion-menu-button").should("be.visible");
        });

        it("should open left menu using menu button navigation", () => {
          cy.viewport("iphone-6", orientation);
          cy.get("ion-menu-button").click();
          cy.get('ion-menu[role="navigation"]').should("be.visible");
          cy.get('ion-menu ion-item[href="/orders"]')
            .should("be.visible")
            .should("contain.text", "My Orders");
          cy.waitForIonicAnimations();
        });

        it("should close left menu when clicking off", () => {
          cy.viewport("iphone-6", orientation);

          cy.get('ion-menu[role="navigation"]')
            .click("topRight")
            .should("not.be.visible");
        });

        it("should not display marketing imagery", () => {
          cy.viewport("iphone-6", orientation);
          cy.get(".hero-image-col").should("not.be.visible");
        });
      });
    });
  });

  describe("on tablet-sized screens", () => {
    before(() => {
      cy.visit("/");
    });

    it("should only display left menu", () => {
      cy.viewport("ipad-2");
      cy.get('ion-menu[role="navigation"]').should("be.visible");
      cy.get("ion-menu-button").should("not.be.visible");
    });

    it("should be the first size to show marketing imagery", () => {
      cy.viewport("ipad-2");
      cy.get(".hero-image-col").should("be.visible");
    });
  });

  describe("on larger screens", () => {
    before(() => {
      cy.visit("/");
    });

    it("should continue displaying marketing imagery", () => {
      cy.viewport("macbook-15");
      cy.get(".hero-image-col").should("be.visible");
    });
  });
});
