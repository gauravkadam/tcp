import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MyCourseService } from 'src/app/services/my-course.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, AfterViewChecked {

  constructor(private service: MyCourseService, private fb: FormBuilder) { }

  public htmlContent: any;
  public taskType: string;
  public imagePath;
  public imgURL: any;
  public message: string;
  public fileElement: any;
  public questionArray = [];
  public questionForm: any;
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
  public isTaskPanelOpen: boolean;
  public isViewTask: boolean;
  
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
    this.taskType = 'addQuiz';
    this.questionForm = this.fb.group({
      question: [''],
      answers: this.fb.array([
        this.fb.control('')
      ])
    });

    this.service.getViewTask()
    .subscribe(data => {
      this.isViewTask = data
    });

  }

  get getAnswersForm() {
    return this.questionForm.get('answers') as FormArray;
  }

  addAlias() {
    this.getAnswersForm.push(this.fb.control(''));
  }

  uploadFile() {
    this.fileElement = document.getElementById('upload-file');
    this.fileElement.click();
  }

  uploadPDF(){
    this.fileElement = document.getElementById('upload-PDF');
    this.fileElement.click();
  }

  uploadText() {
    this.addText = true;
  }

  ngAfterViewChecked() {
    const test = document.getElementsByClassName('angular-editor-toolbar-set');
    if (test.length > 0) {
      test[2]['style'].display = 'none';
      test[3]['style'].display = 'none';
      test[5]['style'].display = 'none';
      test[6]['style'].display = 'none';
      test[7]['style'].display = 'none';
      test[9]['style'].display = 'none';
      test[10]['style'].display = 'none';
      test[11]['style'].display = 'none';
    }

  }

  addQuestion() {
    this.questionArray.push({
      question: '',
      editable: false,
      answers: []
    });
    this.openAnswerPanel(this.questionArray.length - 1);
    this.questionForm.reset();
  }

  copyQuestion(index){
    this.questionArray.push({...this.questionArray[index]});
    this.openAnswerPanel(index + 1);
  }

  submitQuestion(i) {
    this.questionArray[i].editable = false;
    this.questionArray[i].question = this.questionForm.value.question;
    this.questionArray[i].answers = this.questionForm.value.answers;
  }

  openAnswerPanel(i) {
    for (let index in this.questionArray) {
      if (index != i) {
        this.questionArray[index].editable = false;
      }
    }
    this.questionForm.reset();
    this.questionForm.patchValue({
      question: this.questionArray[i].question,
      answers: this.questionArray[i].answers
    });
    this.questionArray[i].editable = !this.questionArray[i].editable;
  }

  deleteQuestion(i) {
    this.questionArray.splice(i, 1);
  }

  addQuizTask() {
    this.service.addQuizTask({
      TypeId: 1,
      Title: 'HTML'
    })
      .subscribe(res => {
        console.log(res);
      })

      this.service.setViewTask(false);
  }

  openTasks() {
    this.isTaskPanelOpen = !this.isTaskPanelOpen;
  }

  makeEditTaskVisible(){
    this.openTasks();
    this.isViewTask = true;
  }

  makeEditTaskInvisible(){
    this.openTasks();
    this.isViewTask = false;
  }

}
