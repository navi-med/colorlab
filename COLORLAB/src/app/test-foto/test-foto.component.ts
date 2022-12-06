import { Component } from '@angular/core';

@Component({
  selector: 'app-test-foto',
  templateUrl: './test-foto.component.html',
  styleUrls: ['./test-foto.component.css']
})
export class TestFotoComponent {

}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems,);
});