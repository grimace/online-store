import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

steps = [

    { title:'', name:'', complete:false, check:this.test },
    { title:'', name:'', complete:false, check:this.test },
    { title:'', name:'', complete:false, check:this.test },
    { title:'', name:'', complete:false, check:this.test },
    { title:'', name:'', complete:false, check:this.test },
    { title:'', name:'', complete:false, check:this.test },

]
constructor(private router: Router) { }

ngOnInit() {
}

 test() {
   return true;
 }
}
