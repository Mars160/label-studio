import { LabelStudio, Sidebar, Tooltip } from "@humansignal/frontend-test/helpers/LSF/index";
import { simpleRegionsConfig, simpleRegionsData, simpleRegionsResult } from "../../data/outliner/hide-all";

describe("Outliner - Hide all regions", () => {
  it("should exist", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult(simpleRegionsResult).init();

    Sidebar.hasRegions(3);
    Sidebar.hideAllRegionsButton.should("be.visible").should("be.enabled");
  });

  it("should be disabled without existed regions", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult([]).init();

    Sidebar.hasRegions(0);
    Sidebar.hideAllRegionsButton.should("be.visible").should("be.disabled");
  });

  it("should hide all regions", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult(simpleRegionsResult).init();

    Sidebar.hasRegions(3);
    Sidebar.hasHiddenRegion(0);
    Sidebar.hideAllRegionsButton.click();
    Sidebar.hasHiddenRegion(3);
  });

  it("should show all regions", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult(simpleRegionsResult).init();

    Sidebar.hasRegions(3);
    Sidebar.hideAllRegionsButton.click();
    Sidebar.hasHiddenRegion(3);
    Sidebar.showAllRegionsButton.click();
    Sidebar.hasHiddenRegion(0);
  });

  it("should hide rest regions", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult(simpleRegionsResult).init();

    Sidebar.hasRegions(3);
    Sidebar.toggleRegionVisibility(1);
    Sidebar.hasHiddenRegion(1);
    Sidebar.hideAllRegionsButton.click();
    Sidebar.hasHiddenRegion(3);
  });

  it("should hide all regions except the target region by ID from param", () => {
    LabelStudio.params()
      .config(simpleRegionsConfig)
      .data(simpleRegionsData)
      .withResult(simpleRegionsResult)
      .withParam("region", "label_2")
      .init();
    LabelStudio.setFeatureFlagsOnPageLoad({
      fflag_feat_front_optic_1553_url_based_region_visibility_short: true,
    });
    cy.window().then((win) => {
      (win as unknown as any).Htx.annotationStore.annotations[0].regionStore.setRegionVisible(
        (win as unknown as any).LSF_CONFIG.region,
      );
    });

    Sidebar.hasRegions(3);
    Sidebar.hasHiddenRegion(2);
    Sidebar.findRegionByIndex(0)
      .should("contain.text", "Label 1")
      .parent()
      .should("have.class", "lsf-tree__node_hidden");
    Sidebar.findRegionByIndex(1)
      .should("contain.text", "Label 2")
      .parent()
      .should("not.have.class", "lsf-tree__node_hidden");
    Sidebar.findRegionByIndex(2)
      .should("contain.text", "Label 3")
      .parent()
      .should("have.class", "lsf-tree__node_hidden");
  });

  it("should have tooltip for hide action", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult(simpleRegionsResult).init();

    Sidebar.hasRegions(3);
    Sidebar.hideAllRegionsButton.trigger("mouseenter");
    Tooltip.hasText("Hide all regions");
  });

  it("should have tooltip for show action", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult(simpleRegionsResult).init();

    Sidebar.hasRegions(3);
    Sidebar.hideAllRegionsButton.click();
    Sidebar.showAllRegionsButton.trigger("mouseenter");
    Tooltip.hasText("Show all regions");
  });

  it("should react to changes in regions' visibility", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult(simpleRegionsResult).init();

    Sidebar.hasRegions(3);
    Sidebar.hideAllRegionsButton.click();

    Sidebar.showAllRegionsButton.should("be.visible");
    Sidebar.toggleRegionVisibility(1);
    Sidebar.hideAllRegionsButton.should("be.visible");
  });

  it("should toggle visibility when its grouped by tool ", () => {
    LabelStudio.params().config(simpleRegionsConfig).data(simpleRegionsData).withResult(simpleRegionsResult).init();

    Sidebar.hasRegions(3);

    cy.get('[data-testid="grouping-manual"]').click();
    cy.wait(500);
    cy.contains("Group by Tool").click({ force: true });
    Sidebar.toggleRegionVisibility(0);
    Sidebar.hasHiddenRegion(3);
  });
});
