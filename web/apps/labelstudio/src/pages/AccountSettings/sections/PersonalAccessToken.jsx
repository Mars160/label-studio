import React from 'react';
import { Input, TextArea } from '../../../components/Form';
import { Button } from '../../../components/Button/Button';
import { IconLaunch } from 'apps/labelstudio/src/assets/icons';

export const PersonalAccessToken = () => {
  return (
    <div className="">
      <a id="personal-access-token" />
      <h2>Personal Access Token</h2>
      <p>Authenticate with our API using your personal access token.
        {!APP_SETTINGS?.whitelabel_is_active && (
          <>See <a href='https://labelstud.io/guide/api.html' target="_blank">Docs <IconLaunch /></a></>
        )}
      </p> 
      <div className="">
        <Input label="Access Token" name="token" />
        <Button look="primary" size="compact">Generate</Button>
      </div>
      <div className="">
        <TextArea label="Example CURL Request" name="example-curl" readOnly />
      </div>
    </div>
  );
};