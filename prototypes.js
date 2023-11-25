// Projects, Todos and notes classes

class Project {
  constructor(_title, _details) {
    this.title = _title;
    this.details = _details;
  }
}

class Todo {
  constructor(_title, _description, _dueDate, _notes, _checklist) {
    this.title = _title;
    this.description = _description;
    this.dueDate = _dueDate;
    this.notes = _notes;
    this.checklist = _checklist;
  }
}

class Note {
  constructor(_title, _details) {
    this.title = _title;
    this.detaiils = _details;
  }
}

export { Project, Todo, Note };
