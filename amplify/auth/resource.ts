/** amplify/auth/resource.ts */
import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: "ap-northeast-1_0aTizyp71",
  identityPoolId: "ap-northeast-1:eab86edd-a4fd-4e55-95cc-f75cfdf1926a",
  authRoleArn: "arn:aws:iam::381293813773:role/dev_mcg_defaultAuthenticated",
  unauthRoleArn: "arn:aws:iam::381293813773:role/dev_mcg_defaultUnAuthenticated",
  userPoolClientId: "7fa6vfmvssa5krgg6gfij0oaag",
});