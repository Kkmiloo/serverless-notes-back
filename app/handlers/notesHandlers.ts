import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { getResponseHeaders, getUserId, getUserName } from '../utils/utils';
import { CreateNoteDto } from '../notes/dto/create-note.dto';
import { NotesController } from '../notes/controller/NotesController';

const notesController = new NotesController();
/**
 *
 * Route: POST /notes
 */

export const createNote = async (event: APIGatewayProxyEventV2) => {
  try {
    const note: CreateNoteDto = JSON.parse(event.body as string);

    console.log(event.headers);

    note.user_id = getUserId(event.headers);
    note.user_name = getUserName(event.headers);

    const result = await notesController.addNote(note);
    return result;
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      headers: getResponseHeaders(),
      body: JSON.stringify(error),
    };
  }
};

/**
 *
 * update: DELETE /notes
 *
 */
export const updateNote = async (event: APIGatewayProxyEventV2) => {
  try {
    const note: CreateNoteDto = JSON.parse(event.body as string);
    note.user_id = getUserId(event.headers);
    note.user_name = getUserName(event.headers);

    return notesController.updateNote(note);
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      headers: getResponseHeaders(),
      body: JSON.stringify(error),
    };
  }
};

/**
 *
 * update: GET /notes/n/{id}
 *
 */
export const getNote = async (event: APIGatewayProxyEventV2) => {
  try {
    const id = event.queryStringParameters?.id;
    if (!id) throw { statusCode: 400, message: 'id is required' };

    return notesController.getNote(id);
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      headers: getResponseHeaders(),
      body: JSON.stringify(error),
    };
  }
};

/**
 *
 * update: GET /notes
 *
 */
export const getAllNotes = async (event: APIGatewayProxyEventV2) => {
  try {
    const id = event.queryStringParameters?.id;
    if (!id) throw { statusCode: 400, message: 'id is required' };

    return notesController.getNote(id);
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      headers: getResponseHeaders(),
      body: JSON.stringify(error),
    };
  }
};

/**
 *
 * Route: DELETE /notes
 *
 */
export const deleteNote = async (event: APIGatewayProxyEventV2) => {
  try {
    let timestamp = parseInt(event.queryStringParameters?.timestamp as string);
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      headers: getResponseHeaders(),
      body: JSON.stringify(error),
    };
  }
};
