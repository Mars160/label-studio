import { FF_DISABLE_GLOBAL_USER_FETCHING, isFF } from "./feature-flags";

describe("Data Manager feature flags", () => {
  const originalAppSettings = window.APP_SETTINGS;

  afterEach(() => {
    window.APP_SETTINGS = originalAppSettings;
  });

  it("keeps global user fetching enabled in the opensource edition", () => {
    window.APP_SETTINGS = {
      sentry_environment: "opensource",
      feature_flags_default_value: true,
      feature_flags: {
        [FF_DISABLE_GLOBAL_USER_FETCHING]: true,
      },
    };

    expect(isFF(FF_DISABLE_GLOBAL_USER_FETCHING)).toBe(false);
  });

  it("preserves the configured flag outside the opensource edition", () => {
    window.APP_SETTINGS = {
      sentry_environment: "production",
      feature_flags_default_value: false,
      feature_flags: {
        [FF_DISABLE_GLOBAL_USER_FETCHING]: true,
      },
    };

    expect(isFF(FF_DISABLE_GLOBAL_USER_FETCHING)).toBe(true);
  });
});
