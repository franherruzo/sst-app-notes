import { Bucket, Table, StackContext } from '@serverless-stack/resources';

export function StorageStack({ stack }: StackContext) {
  const table = new Table(stack, 'Notes', {
    fields: {
      userId: 'string',
      noteId: 'string'
    },
    primaryIndex: { partitionKey: 'userId', sortKey: 'noteId' }
  });

  const bucket = new Bucket(stack, 'Uploads');

  return {
    table,
    bucket
  };
}
