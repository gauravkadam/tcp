import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MyCourseService } from 'src/app/services/my-course.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(private service: MyCourseService) { }

  public htmlContent: any;
  public taskType: string;
  public imagePath;
  public imgURL: any;
  public message: string;
  public fileElement: any;
  public questionArray = [];
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: false,
    showToolbar: false,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  public addText: boolean;

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  ngOnInit(): void {
    this.taskType = 'addReading';

  }

  uploadFile() {
    this.fileElement.click();
  }

  uploadText() {
    this.addText = true;
  }

  ngAfterViewInit() {
    this.fileElement = document.getElementById('upload-file');
  }

  ngAfterViewChecked(){
    const test = document.getElementsByClassName('angular-editor-toolbar-set');
    test[2].style.display = 'none';
    test[3].style.display = 'none';
    test[5].style.display = 'none';
    test[6].style.display = 'none';
    test[7].style.display = 'none';
    test[9].style.display = 'none';
    test[10].style.display = 'none';
    test[11].style.display = 'none';

  }

  addQuestion(){
    this.questionArray.push({
      question: '',
      editable: false,
      answers: []
    });
  }

  openAnswerPanel(i){
    for(let index in this.questionArray){
      if(index != i){
        this.questionArray[index].editable = false;
      }
    }
    this.questionArray[i].editable = !this.questionArray[i].editable;
  }

  deleteQuestion(i){
    this.questionArray.splice(i,1);
  }

  addQuizTask(){
    this.service.addQuizTask({
      TypeId: 1,
      Title: 'HTML'
    })
    .subscribe(res => {
      console.log(res);
    })
  }

}
