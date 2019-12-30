import {commands as Commands, window as Window, ExtensionContext} from 'vscode';
import { getFileType } from './fileRecongnizer';
import FileType from './enums/fileType';

export function activate(context: ExtensionContext) {
	let disposable = Commands.registerCommand('extension.properProps', () => {
		const fileType: FileType = getFileType();
		Window.showInformationMessage(`That's a ${FileType[fileType]} file son`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
