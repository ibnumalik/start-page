import { readFile } from 'fs';
import { homedir } from 'os';

const ultralistFile = homedir() + '/.todos.json';

readFile(ultralistFile, 'utf-8', (err, ultraListFile) => {
  if (err) throw err;

  const ultraLists: UltraListTodo[] = JSON.parse(ultraListFile);
});

export interface UltraListTodo {
  id: number;
  uuid: string;
  subject: string;
  projects: string[];
  contexts: string[];
  due: string;
  completed: boolean;
  completedDate: string;
  archived: boolean;
  isPriority: boolean;
  notes: null;
}
