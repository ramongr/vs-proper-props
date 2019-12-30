import { window as Window } from 'vscode';
import FileType from './enums/fileType';


export function getFileName() {
  return Window.activeTextEditor?.document.fileName;
}

export function getFileType(): FileType {
  const fileName = getFileName()?.split('/').pop();
  const fileType = fileName?.split('.').pop();
  switch (fileType) {
    case 'tsx':
      return FileType.TypeScript;
    case 'jsx':
      return FileType.Javascript;
  }

  return FileType.None;
}
