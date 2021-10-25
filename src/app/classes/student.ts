import { OnInit } from "@angular/core";

export class Student{

    constructor(ru: Number, name: string, gradeName: string, birthDate: Date) { 
      this._ru = ru;
      this._name = name;
      this._gradeName = gradeName;
      this._birthDate = birthDate;
    }
      
    private _ru : Number = 0;
    public get RU() : Number {
      return this._ru;
    }
    public set RU(v : Number) {
      this._ru = v;
    }  
    
    private _name : string = "";
    public get Name() : string {
      return this._name;
    }
    public set Name(v : string) {
      this._name = v;
    }
      
    private _gradeName : string = "";
    public get GradeName() : string {
      return this._gradeName;
    }
    public set gradeName(v : string) {
      this._gradeName = v;
    }
      
    private _birthDate : Date = new Date();
    public get BirthDate() : Date {
      return this._birthDate;
    }
    public set BirthDate(v : Date) {
      this._birthDate = v;
    }
    
  }