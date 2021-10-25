import { Component, Inject, OnInit } from '@angular/core';
import { Student } from '../classes/student';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  constructor() { 

  }

  ngOnInit(): void {
    //this.studentList
    this.buildStudentList();
  }

  public students: any = [];

  buildStudentList() {
    let student1 = new Student(3294451, "Gustavo","Análise e Desennvolvimento de Sistemas", new Date(1997,9,13));
    let student2 = new Student(4214512, "Ricardo","Administração", new Date(1990,2,18));
    let student3 = new Student(3451455, "Aline","Nutrição", new Date(1990,2,18));
    let student4 = new Student(1821385, "Carlos","Marketing Digital", new Date(1990,2,18));
    let student5 = new Student(2545486, "Vanessa","Desing Gráfico", new Date(1990,2,18));

    this._studentList.push(student1);
    this._studentList.push(student2);
    this._studentList.push(student3);
    this._studentList.push(student4);
    this._studentList.push(student5);   
    this.students = this.studentList;
  }
      
  private _studentList : Array<Student> = [];
  public get studentList() : Array<Student> {
    return this._studentList;
  }
  public set studentList(v : Array<Student>) {
    this._studentList = v;
  }

}
