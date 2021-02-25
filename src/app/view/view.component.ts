import { Form3Component } from './../form3/form3.component';

import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model.ts/Users';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  //@Input()  public user: User;
  //@Input() a: string;

  @Input() data: any;




  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    // const i = this.route.snapshot.params['i'];
    // this.userId=i;
    //this.getDataById(this.user);
    //console.log(this.getDataById(this.user))
    //this.user.adresse=i
    //this.uService.getDataById(i)?.adresse;
    // console.log(this.userId)


    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.user=i;

    //his.userId=i;
      //this.listUser.f



  }

    // this.uService.getDataById(this.user);
    // console.log(this.uService.getDataById(this.user));

      //let i = this.route.snapshot.params['i'];
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.userId=i;
      //this.listUser.find(categorie => categorie.idu === +id)
      //const index =this.listUser.indexOf(user,0);

      //u= this.listUser.find(u=> u== index);
        //       return this.u;
        //    }

        // (+) before `id` turns the string into a number

     // const index = this.listUser.find(categorie => categorie.idu === +id);









    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);


}
