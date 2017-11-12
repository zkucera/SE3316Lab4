import { Injectable } from '@angular/core';
@Injectable()
export class CoursesService {
     classlist: Array<string> = ["Course1","Course2","Course3"];
     
     getCourses() : string[] {
        return this.classlist;
         }
       saveCourse  (a :string)  {
           this.classlist.push(a);
          
       }
       
       
  constructor() {
      
      
  }

}
