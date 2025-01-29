import { Input, TextArea } from "/apps/labelstudio/src/components/Form";
import { Button } from "/apps/labelstudio/src/components/Button/Button";
import { IconLaunch, IconFileCopy } from "@humansignal/ui";

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
            <a
              href="https://labelstud.io/guide/api.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex gap-1"
            >
              Docs{" "}
              <span>
                <IconLaunch />
              </span>
            </a>
          </>
        )}
      </p>
      <div className="flex gap-2 w-full justify-between">
        <Input label="Access Token" name="token" />
        <Button size="compact" icon={<IconFileCopy />}>
          Copy
        </Button>
        <Button look="Danger" size="compact">
          Reset
        </Button>
      </div>
      <div className="flex gap-2 w-full justify-between">
        <TextArea label="Example CURL Request" name="example-curl" readOnly />
        <Button size="compact" icon={<IconFileCopy />}>
          Copy
        </Button>
      </div>
    </div>
  );
};
