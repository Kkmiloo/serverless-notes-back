import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { NotesService } from '../service/NotesService';
import { CreateNoteDto } from '../dto/create-note.dto';

export class NotesController {
  private readonly notesService: NotesService;
  constructor() {
    this.notesService = new NotesService();
  }

  async addNote(note: CreateNoteDto) {
    return await this.notesService.addNote(note);
  }

  async updateNote(note: CreateNoteDto) {
    return await this.notesService.updateNote(note);
  }

  async getNote(id: string) {
    return await this.notesService.getNote(id);
  }
}
