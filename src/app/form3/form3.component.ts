
import { User } from './../model.ts/Users';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Component, ElementRef, OnInit } from "@angular/core";
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import swal from 'sweetalert2';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import   jsPDF from 'jspdf';

import { map, filter } from 'rxjs/operators';





@Component({
  selector: "app-form3",
  templateUrl: "./form3.component.html",
  styleUrls: ["./form3.component.scss"],

})
export class Form3Component implements OnInit {

  closeResult = '';
  u?:User;
  user =new  User();
  selectUser? :  User;
  i?: number;
  vall: boolean=false;
  listUser: User[]=[];
  searchValue: string='';
  idMax: number=0;
  activeindex : any;
  setCurrentUser?:any;
  isUpdate: Boolean= false;
  statusName='';
  statusValue: Boolean=false;
  fileName= 'ExcelSheet.xlsx';

  minDate?: Date;
  maxDate?: Date;
  bsdateconfigonfig: Partial<BsDatepickerConfig>;
  containerClass?: string;
  showWeekNumbers?: boolean;
  dateInputFormat?: string;


 //userid: number[];
 //setCurrentSurvey_id:number;
 //uc:number;

 registerForm:  FormGroup;
 //unamePattern = "^[ a-zA-Z0-9 ]$";
 unamePattern = "[A-Za-z0-9éè ]*";
 //namePattern = "[a-zA-Z]*";
  //pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{9}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  element?: ElementRef;














  constructor(private formbuilder: FormBuilder,private modalService: NgbModal, private router: Router, private activemodal:NgbActiveModal){




       this.listUser=[
      {firstName:'Ablaye', lastName: 'Dia',email: 'ablaye@gmail.com' , telephone: '772348595', adresse: 'Parcelle unite 3',dateNai: "1/3/1988" , code:123},
       {firstName:'Zoubeida', lastName: 'Ndiaye',email: 'zou@gmail.com' , telephone: '703398899',dateNai:"09/07/1993", adresse: 'Grand mbour' , code:291}
       ];
      this.registerForm = this.formbuilder.group({


        firstName: ['', [Validators.required,Validators.minLength(2),Validators.pattern(this.unamePattern)] ],
        lastName:['', [Validators.required,Validators.minLength(2), Validators.pattern(this.unamePattern)]],
        email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
        telephone: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
        adresse: ['', [Validators.required,Validators.minLength(3)]],
        dateNai: ['', Validators.required]





      });
//Configuration date
      this.bsdateconfigonfig=Object.assign({},
        {
          containerClass: 'theme-dark-blue',
          showWeekNumbers: true,
          minDate: new Date(1900,0,1),
          maxDate: new Date(2021,1,1),
          dateInputFormat: 'DD/MM/YYYY',

        });



      }



getstatus(): string{
if(this.statusValue === false){
  this.statusName= 'Ajouter';
}else{
  this.statusName= 'Modifier';
}
 return this.statusName;
}

       open(content: any) {
       this.activemodal=this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
       }

       open1(content: any) {
        this.activemodal=this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
        }



editData(user: User , i: number){
  //this.isUpdate= true;

  this.setCurrentUser=i;
  //this.listUser[setCurrentUser]= this.u[i];

  this.registerForm = this.formbuilder.group({


    firstName: [this.listUser[this.setCurrentUser].firstName, [Validators.required,Validators.minLength(2),Validators.pattern(this.unamePattern)] ],
    lastName:[this.listUser[this.setCurrentUser].lastName, [Validators.required,Validators.minLength(2), Validators.pattern(this.unamePattern)]],
    email: [this.listUser[this.setCurrentUser].email,[Validators.required, Validators.pattern(this.emailPattern)]],
    telephone: [this.listUser[this.setCurrentUser].telephone, [Validators.required, Validators.pattern(this.mobnumPattern)]],
    adresse: [this.listUser[this.setCurrentUser].adresse, Validators.required],
    dateNai: [this.listUser[this.setCurrentUser].dateNai, Validators.required]

    });


    }


  ngOnInit():void{


  }
  reset(){
    this.registerForm = this.formbuilder.group({


      firstName: ['', [Validators.required,Validators.minLength(2),Validators.pattern(this.unamePattern)] ],
      lastName:['', [Validators.required,Validators.minLength(2), Validators.pattern(this.unamePattern)]],
      email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
      telephone: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      adresse: ['', Validators.required],
      dateNai: ['', Validators.required]





    });

  }

  exportExcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }


  exportPdf(){

  var doc =  new jsPDF('p', 'pt', 'a4');
   //pdf.addHTML(elementToPrint, () => {
   doc.save('web.pdf');





  }


  OnSelect(user: User)
  {
   this.selectUser=user;

    console.log(this.selectUser)


  }



addUser(){





        swal.fire({
          title: 'Êtes-vous sûr?',
          text: "De vouloir ajouter un utilisateur",
          icon: 'info',
          showCancelButton: true,
          cancelButtonText: 'Annuler',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmer'
        }).then((result) => {
          if (result.isConfirmed) {

      this.vall = true;

      this.listUser.push(this.registerForm?.value);
      console.log("user",this.registerForm?.value)
      this.reset();
      this.activemodal.close();
      swal.fire(
        'Ajouter',
        'Votre utilisateur a été ajouté',
        'success'
      )
    }
  })





}

onUpdate(user: User,i:number){



swal.fire({
  title: 'Êtes-vous sûr?',
  text: "vous ne pourrez pas annuler cela!",
  icon: 'warning',
  showCancelButton: true,
  cancelButtonText: 'Annuler',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Confirmer'
}).then((result) => {
  if (result.isConfirmed) {

    const index =this.listUser.indexOf(user,0);
    this.listUser.unshift(this.registerForm.value);
    i=index;
    this.listUser.splice(i,1);
    this.reset();
    this.activemodal.close();

    swal.fire(
      'Modifier',
      'Votre utilisateur a été modifié',
      'success'
    )
  }
})




}

  onSubmit() {

    user: User;
    this.vall= true;

    if(this.registerForm.valid){

                if(this.isUpdate==false){

                    this.addUser();


                }else{
                  this.onUpdate(this.user, this.setCurrentUser);
                }
                this.isUpdate=false;
              }



            }

            telInputObject(obj: any) {
              console.log(obj);
              obj.setCountry('sn');
            }


            hasError(obj: any) {
              console.log(obj);
              //obj.setCountry('in');
            }
           getNumber(obj: any) {
              console.log(obj);
              //obj.setCountry('in');
            }


            onCountryChange(obj: any) {
              console.log(obj);
             // obj.setCountry('in');
            }
















  getAllData(): User[]{

    return this.listUser;
   }







 onDelete(u: User){


    swal.fire({
      title: 'Supprimer un utilisateur?',
      text: "Vous etes sur de vouloir supprimer un utilisateur?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmer!'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.listUser.indexOf(u , 0);
        if(index> -1){
          this.listUser.splice(index,1);
        }
        swal.fire(


          'utilisateur supprimé',
          'success'
        )
      }
    });
  }


}

