// Note class
class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.createdAt = new Date();
    this.tags = [];
    this.isFavorite = false;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    console.log(`Note "${this.title}" is ${this.isFavorite ? 'marked as favorite' : 'no longer a favorite'}.`);
  }

  addTag(tag) {
    this.tags.push(tag);
    console.log(`Tag "${tag}" added to note "${this.title}".`);
  }

  removeTag(tag) {
    const index = this.tags.indexOf(tag);
    if (index !== -1) {
      this.tags.splice(index, 1);
      console.log(`Tag "${tag}" removed from note "${this.title}".`);
    } else {
      console.log(`Tag "${tag}" not found in note "${this.title}".`);
    }
  }
}

// NoteCraft App class
class NoteCraft {
  constructor() {
    this.notes = [];
  }

  createNote() {
    const title = prompt("Enter note title:");
    const content = prompt("Enter note content:");
    const note = new Note(title, content);
    this.notes.push(note);
    console.log(`New note created: ${note.title}`);
  }

  viewNotes() {
    if (this.notes.length === 0) {
      console.log("No notes found.");
    } else {
      console.log("----- Notes -----");
      this.notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note.title}`);
        console.log(`   ${note.content}`);
        console.log(`   Created: ${note.createdAt}`);
        console.log(`   Tags: ${note.tags.join(", ")}`);
        console.log(`   Favorite: ${note.isFavorite}`);
        console.log("------------------");
      });
    }
  }

  deleteNote() {
    const index = prompt("Enter the index of the note to delete:");
    if (index >= 0 && index < this.notes.length) {
      const deletedNote = this.notes.splice(index, 1)[0];
      console.log(`Note deleted: ${deletedNote.title}`);
    } else {
      console.log("Invalid note index.");
    }
  }

  searchNotes() {
    const keyword = prompt("Enter a keyword to search notes:");
    const matchingNotes = this.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase()) ||
        note.content.toLowerCase().includes(keyword.toLowerCase()) ||
        note.tags.some((tag) => tag.toLowerCase().includes(keyword.toLowerCase()))
    );

    if (matchingNotes.length === 0) {
      console.log("No matching notes found.");
    } else {
      console.log("----- Matching Notes -----");
      matchingNotes.forEach((note) => {
        console.log(`${note.title}`);
        console.log(`   ${note.content}`);
        console.log(`   Created: ${note.createdAt}`);
        console.log(`   Tags: ${note.tags.join(", ")}`);
        console.log(`   Favorite: ${note.isFavorite}`);
        console.log("--------------------------");
      });
    }
  }

  editNote() {
    const index = prompt("Enter the index of the note to edit:");
    if (index >= 0 && index < this.notes.length) {
      const note = this.notes[index];
      const newTitle = prompt(`Enter a new title for note "${note.title}":`, note.title);
      const newContent = prompt(`Enter new content for note "${note.title}":`, note.content);
      note.title = newTitle;
      note.content = newContent;
      console.log(`Note "${note.title}" has been updated.`);
    } else {
      console.log("Invalid note index.");
    }
  }
}

// Usage example
const notecraft = new NoteCraft();

while (true) {
  const action = prompt("Enter an action (create, view, delete, search, edit, exit):");
  
  if (action === "create") {
    notecraft.createNote();
  } else if (action === "view") {
    notecraft.viewNotes();
  } else if (action === "delete") {
    notecraft.deleteNote();
  } else if (action === "search") {
    notecraft.searchNotes();
  } else if (action === "edit") {
    notecraft.editNote();
  } else if (action === "exit") {
    console.log("Exiting NoteCraft.");
    break;
  } else {
    console.log("Invalid action. Please try again.");
  }
}
