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
    let student1 = new Student(1234567, "Carlos","Marketing Digital", new Date(1990,2,18));
    let student2 = new Student(1234567, "Ricardo","Administração", new Date(1990,2,18));
    let student3 = new Student(1234567, "Aline","Nutrição", new Date(1990,2,18));
    let student4 = new Student(3294451, "Gustavo","Análise e Desennvolvimento de Sistemas", new Date(1994,2,18));
    let student5 = new Student(1234567, "Vanessa","Desing Gráfico", new Date(1990,2,18));

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
