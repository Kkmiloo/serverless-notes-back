import { NotesRepository } from '../repository/NotesRepository';

import { CreateNoteDto } from '../dto/create-note.dto';
import { Notes } from '../interfaces/notes.interface';
import { v4 as uuidv4 } from 'uuid';
import { addDays } from 'date-fns';

export class NotesService {
  private readonly notesRepository: NotesRepository;
  constructor() {
    this.notesRepository = new NotesRepository();
  }

  async addNote(note: CreateNoteDto) {
    const newNote: Notes = {
      ...note,
      note_id: uuidv4(),
      timestamp: new Date().getTime(),
      expires: addDays(new Date().getTime(), 90).getTime(),
    };

    return await this.notesRepository.createNote(newNote);
  }

  async getNote(id: string) {
    const note = await this.notesRepository.getNote(id);

    if (!note) throw new Error('Note not founds');

    return note;
  }
  updateNote(note: CreateNoteDto) {}
}
