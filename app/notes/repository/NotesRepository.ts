import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
} from '@aws-sdk/lib-dynamodb';
import { Notes } from '../interfaces/notes.interface';

const client = new DynamoDBClient({});
const notesDocClient = DynamoDBDocumentClient.from(client);
const tableName = process.env.NOTES_TABLE;

export class NotesRepository {
  private client: DynamoDBClient;
  private notesDocClient: DynamoDBDocumentClient;
  constructor() {
    this.client = new DynamoDBClient({});
    this.notesDocClient = DynamoDBDocumentClient.from(client);
  }

  async getNote(id: string) {
    const command = new GetCommand({
      TableName: tableName,
      Key: {
        note_id: id,
      },
    });
    return await this.notesDocClient.send(command);
  }

  async createNote(note: Notes) {
    const command = new PutCommand({
      TableName: tableName,
      Item: note,
    });
    const response = await this.notesDocClient.send(command);
    console.log(response);
    return response;
  }

  async updateNote(note: Partial<Notes>) {
    const command = new PutCommand({
      TableName: tableName,
      Item: note,
      ConditionExpression: '#t = :t',
      ExpressionAttributeNames: {
        '#t': 'timestamp',
      },
      ExpressionAttributeValues: {
        ':t': note.timestamp,
      },
    });
    return await this.notesDocClient.send(command);
  }
}
