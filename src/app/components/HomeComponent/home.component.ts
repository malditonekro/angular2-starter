import { Component, OnInit, trigger, transition, style, Pipe, PipeTransform, WrappedValue } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Home',
  template: require('./home.component.html'),
  styles: [require('./home.component.css')],
  providers: []
})


export class HomeComponent implements OnInit {

  var:string;

  ngOnInit() {
    this.var = "App";
    
  }




}

