
// import { FormBuilder, FormGroup, Validators} from "@angular/forms";
// import { Component, ElementRef, OnInit } from "@angular/core";
// import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
// import swal from 'sweetalert2';
// import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

// import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ActivatedRoute, Router } from '@angular/router';
// import * as XLSX from 'xlsx';
// import   jsPDF from 'jspdf';

// import { map, filter } from 'rxjs/operators';

// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { User } from './model.ts/Users';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   closeResult = '';
//   u:User;
//   user =new  User();
//   selectUser? :  User;
//   i?: number;
//   vall: boolean=false;
//   listUser: User[]=[];
//   searchValue: string='';
//   idMax: number=0;
//   activeindex : any;
//   setCurrentUser?:any;
//   isUpdate: Boolean= false;
//   statusName='';
//   statusValue: Boolean=false;
//   fileName= 'ExcelSheet.xlsx';

//   minDate?: Date;
//   maxDate?: Date;
//   bsdateconfigonfig: Partial<BsDatepickerConfig>;
//   containerClass?: string;
//   showWeekNumbers?: boolean;
//   dateInputFormat?: string;


//  //unamePattern = "^[ a-zA-Z0-9 ]$";
//  unamePattern = "[A-Za-z0-9éè ]*";
//  //namePattern = "[a-zA-Z]*";
//   //pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
//   mobnumPattern = "^((\\+91-?)|0)?[0-9]{9}$";
//   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
//   element?: ElementRef;

//   constructor(private formbuilder: FormBuilder,private modalService: NgbModal, private router: Router, private activemodal:NgbActiveModal) {
//     this.listUser=[
//       {firstName:'Ablaye', lastName: 'Dia',email: 'ablaye@gmail.com' , telephone: '772348595', adresse: 'Parcelle unite 3',dateNai: "1/3/1988" , code:123},
//        {firstName:'Zoubeida', lastName: 'Ndiaye',email: 'zou@gmail.com' , telephone: '703398899',dateNai:"09/07/1993", adresse: 'Grand mbour' , code:291}
//        ];
//    }





//   getAllData(): User[]{

//     return this.listUser;
//    }


//    getDataById(i:string){

//     //this.listUser.find(categorie => categorie.idu === +id)
//     //const index =this.listUser.indexOf(user,0);
//     //const index = this.listUser.indexOf(u , 0);
//     //id=index;
//     //this.setCurrentUser=index;
//   const u= this.listUser.find(
//     (u)=> {
//         return u.adresse === i;
//     }
//     );
//       //       return this.u;
//       //    }

//       // (+) before `id` turns the string into a number

//    // const index = this.listUser.find(categorie => categorie.idu === +id);



//     return  u;

//   }


// }
// //https://stackblitz.com/angular/mgdxdkbedxl?file=src%2Fapp%2Fhero-detail%2Fhero-detail.component.ts
