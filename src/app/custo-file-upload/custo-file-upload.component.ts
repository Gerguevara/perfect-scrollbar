import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custo-file-upload',
  templateUrl: './custo-file-upload.component.html',
  styleUrls: ['./custo-file-upload.component.scss'],
})
export class CustoFileUploadComponent implements OnInit {

  dragAreaClass!: string;
  fileUploadForm!: FormGroup;
  error!: string;
  previewIsReady = false;
  file!: File;
  fileName = '';
  fileType = '';
  fileSize = 0;
  fileExtension: string | undefined;
  allowedTypes = ['txt', 'jpg', 'pdf', 'png'];
  allowedInExplorer = '';
  isUploading = false;
  isSuccessful = false;


  constructor(private _formBuilder: FormBuilder) {}

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragAreaClass = 'droparea';
  }

  @HostListener('dragenter', ['$event']) onDragEnter(event: DragEvent): void {
    event.preventDefault();
    this.dragAreaClass = 'droparea';
  }

  @HostListener('dragend', ['$event']) onDragEnd(event: DragEvent): void {
    event.preventDefault();
    this.dragAreaClass = 'dragarea';
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.dragAreaClass = 'dragarea';
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragAreaClass = 'dragarea';

    if (event.dataTransfer) {
      const files: FileList = event.dataTransfer.files;
      this.decodeFiles(files);
    }
  }

  ngOnInit(): void {
    this.dragAreaClass = 'dragarea';
    this.buildForm();
}

  buildForm(): void {
    this.fileUploadForm = this._formBuilder.group({
      file: ['', Validators.required],
    });
  }

  decodeFiles(files: FileList): void {
    if (files.length) {
        if (files[0].size / 1000 < 20000) {
            if (files.length > 1) {
                this.error = 'You can only upload one file at a time';
            } else if (this.typeValidation(files[0].type)) {
                this.error = '';
                this.file = files[0];
                this.fileName = files[0].name;
                this.fileSize = files[0].size / 1000;
                this.fileExtension = files[0].type.split('/', 2).pop();
                this.previewIsReady = true;
            } else {
                this.error = 'File type not allowed';
                this.resetForm();
            }
        } else {
            this.error =
                'File size is too large. Please upload a file less than 20MB';
                this.resetForm();
        }
    }
}

resetForm(): void {
  this.fileUploadForm.reset();
  this.previewIsReady = false;
}


typeValidation(type: string): boolean {
  const extension = type.split('/', 2).pop();
  let isAllowed = false;
  const fileExt = this.allowedTypes.filter((allowedType: any) => {

      if (allowedType === extension) {
          return allowedType;
      }
  })[0];

  if (fileExt) {
      isAllowed = true;
  }
  return isAllowed;
}


onFileChange(event: any): void {
  const files: FileList = event.target.files;
  this.decodeFiles(files);
}


uploadAttachment(): void {
  alert('succes!')
}

}
