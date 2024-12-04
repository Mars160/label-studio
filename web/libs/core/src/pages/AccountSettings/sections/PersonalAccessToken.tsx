// import { Input, TextArea } from "../../../../../../apps/labelstudio/src/components/Form";
// import { Button } from "../../../../../../apps/labelstudio/src/components/Button/Button";
// import { IconLaunch } from "apps/labelstudio/src/assets/icons";

export const PersonalAccessToken = () => {
  return (
    <div className="">
      <a id="personal-access-token" />
      <h1>Personal Access Token</h1>
      <p>
        Authenticate with our API using your personal access token.
        {!APP_SETTINGS?.whitelabel_is_active && (
          <>
            See{" "}
            <a href="https://labelstud.io/guide/api.html" target="_blank" rel="noreferrer">
              {/* Docs <IconLaunch /> */}
            </a>
          </>
        )}
      </p>
      <div className="">
        {/* <Input label="Access Token" name="token" /> */}
        <button look="primary" size="compact">
          Generate
        </button>
      </div>
      <div className="">
        {/* <TextArea label="Example CURL Request" name="example-curl" readOnly /> */}
      </div>
    </div>
  );
};
