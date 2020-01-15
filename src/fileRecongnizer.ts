import { window as Window } from 'vscode';
import FileType from './enums/fileType';


export function getFileName() {
  return Window.activeTextEditor?.document.fileName;
}

export function getFileType(): FileType {
  const fileName = getFileName()?.split('/').pop();
  const fileType = fileName?.split('.').pop();
  switch (fileType) {
    case 'tsx' || 'ts':
      return FileType.TypeScript;
    case 'jsx' || 'js':
      return FileType.Javascript;
    default:
      return FileType.None;
  }
}
