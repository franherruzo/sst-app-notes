import { StorageStack } from './StorageStack';
import { App } from '@serverless-stack/resources';

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'services',
    bundle: {
      format: 'esm'
    }
  });
  app.stack(StorageStack);
}
