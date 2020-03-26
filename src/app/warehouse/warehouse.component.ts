import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  grids: any[][] = [];
  n: Number = 4;
  m: Number = 5;
  start: any = null;
  end: any = null;
  hDirection: any;
  vDirection: any = 'up';
  constructor() { }

  ngOnInit() {
  }

  createWarehouse (event) {
    let n: Number = this.n;
    let m: Number = this.m;
    let count = 1;
    this.start = null;
    this.end = null;
    for (let i=0; i < m; i++) {
      this.grids[i] = [];
      for (let j=0; j < n; j++) {
        this.grids[i][j] = {
          i: i,
          j: j,
          text: '',
          value: count++
        };
      }
    }
  }

  setPoint (i, j) {
    if (this.grids[i][j].text == '' && this.start == null) {
      this.grids[i][j].text = 'S';
      this.start = JSON.parse(JSON.stringify(this.grids[i][j]));
    } else if (this.grids[i][j].text == '' && this.start != null && this.end == null) {
      this.grids[i][j].text = 'E';
      this.end = JSON.parse(JSON.stringify(this.grids[i][j]));
      if (this.end.value > this.start.value) {
        this.hDirection = 'right';
      } else {
        this.hDirection = 'left';
      }
      this.getPath();
    } else if (this.grids[i][j].text == 'S') {
      this.grids[i][j].text = '';
      this.start = null;
      this.end = null;
    } else if (this.grids[i][j].text == 'E') {
      this.grids[i][j].text = '';
      this.end = null;
    }
  }

  next (refObj, locObj) {
    console.log(this.hDirection);
    let ref = JSON.parse(JSON.stringify(refObj));
    let loc = JSON.parse(JSON.stringify(locObj));
    let refValue = ref.value;
    let locValue = loc.value;
    let n = Number(this.n);
    let m = Number(this.m);
    if (refValue == this.end.value) {
      return loc;
    } else if (loc.j == 0 && loc.i < (m - 1)) {
      if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.i++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j++;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.i--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.j++;
      }
    } else if (loc.j == 0 && loc.i == (m - 1)) {
      if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.i++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j++;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.i--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'left' && loc.i != ref.i) {
        loc.j++;
      }
    } else if (loc.j == 0 && loc.i == 0) {
      if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.i++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j++;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.i--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.j++;
      }
    } else if (loc.j == (n - 1) && loc.i < (m - 1)) {
      if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.i++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.i++;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.i--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue < locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.i--;
      }
    } else if (loc.j == (n - 1) && loc.i == (m - 1)) {
      if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.i++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j++;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.i--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.i--;
      } else if (refValue < locValue && this.hDirection == 'left' && loc.i != ref.i) {
        loc.j--;
      }
    } else {
      if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j--;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j++;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i != ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'right' && loc.i == ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.j--;
      } else if (refValue > locValue && this.hDirection == 'left' && loc.i != ref.i) {
        loc.j++;
      } else if (refValue < locValue && this.hDirection == 'left' && loc.i == ref.i) {
        loc.j++;
      }
    }
    return loc;
  }

  getPath () {
    let loc = this.start;
    let ref = { i: -1, j: -1, value: -1};
    let count = 0;
    let n = Number(this.n);
    let m = Number(this.m);
    if (this.vDirection == 'down' && this.start.i == this.end.i && this.start.value > this.end.value) {
      return;
    }
    if (this.vDirection == 'up' && this.start.i == this.end.i && this.start.value < this.end.value) {
      return;
    }
    if (loc.j == 0 && loc.i < (m - 1)) {
      if (this.vDirection == 'down' && this.hDirection == 'right') {
        ref.j = loc.j;
        ref.i = loc.i - 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'right') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'down' && this.hDirection == 'left') {
        ref.j = loc.j;
        ref.i = loc.i + 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'left') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      }
    } else if (loc.j == 0 && loc.i == (m - 1)) {
      if (this.vDirection == 'down' && this.hDirection == 'right') {
        ref.j = loc.j;
        ref.i = loc.i - 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'right') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'down' && this.hDirection == 'left') {
        ref.j = loc.j;
        ref.i = loc.i - 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'left') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      }
    } else if (loc.j == 0 && loc.i == 0) {
      if (this.vDirection == 'down' && this.hDirection == 'right') {

      } else if (this.vDirection == 'up' && this.hDirection == 'right') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'down' && this.hDirection == 'left') {

      } else if (this.vDirection == 'up' && this.hDirection == 'left') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      }
    } else if (loc.j == (n - 1) && loc.i == 0) {
      if (this.vDirection == 'down' && this.hDirection == 'right') {
        ref.j = loc.j - 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'right') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'down' && this.hDirection == 'left') {
        ref.j = loc.j;
        ref.i = loc.i + 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'left') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      }
    } else if (loc.j == (n - 1) && loc.i < (m - 1)) {
      if (this.vDirection == 'down' && this.hDirection == 'right') {
        ref.j = loc.j - 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'right') {
        ref.j = loc.j;
        ref.i = loc.i + 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'down' && this.hDirection == 'left') {
        ref.j = loc.j - 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'left') {
        ref.j = loc.j;
        ref.i = loc.i + 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      }
    } else if (loc.j == (n - 1) && loc.i == (m - 1)) {
      if (this.vDirection == 'down' && this.hDirection == 'right') {
        ref.j = loc.j - 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'right') {
        ref.j = loc.j;
        ref.i = loc.i - 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'down' && this.hDirection == 'left') {
        ref.j = loc.j - 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'left') {
        ref.j = loc.j;
        ref.i = loc.i - 1;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      }
    } else {
      if (this.vDirection == 'down' && this.hDirection == 'right') {
        ref.j = loc.j - 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'right') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'down' && this.hDirection == 'left') {
        ref.j = loc.j - 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      } else if (this.vDirection == 'up' && this.hDirection == 'left') {
        ref.j = loc.j + 1;
        ref.i = loc.i;
        ref.value = this.grids[ref.i] && this.grids[ref.i][ref.j] ? this.grids[ref.i][ref.j].value : -1;
      }
    }

    while (loc.value != this.end.value) {
      let nextLoc = this.next(ref, loc);
      nextLoc.value = this.grids[nextLoc.i][nextLoc.j].value;
      if (nextLoc.i == loc.i && (nextLoc.j - loc.j) == -1) {
        this.grids[loc.i][loc.j].arrow = 'expand_less';
      }
      if (nextLoc.i == loc.i && (nextLoc.j - loc.j) == 1) {
        this.grids[loc.i][loc.j].arrow = 'expand_more';
      }
      if (nextLoc.j == loc.j && (nextLoc.i - loc.i) == 1) {
        this.grids[loc.i][loc.j].arrow = 'chevron_right';
      }
      if (nextLoc.j == loc.j && (nextLoc.i - loc.i) == -1) {
        this.grids[loc.i][loc.j].arrow = 'chevron_left';
      }
      ref = JSON.parse(JSON.stringify(loc));
      loc = JSON.parse(JSON.stringify(nextLoc));
      this.grids[loc.i][loc.j].text = '^';
      loc.value = this.grids[loc.i][loc.j].value;

      if (nextLoc.value == this.end.value) {
        this.grids[loc.i][loc.j].text = 'E';
        break;
      }
      count ++;
      if (count > n * m) {
        break;
      }
    }
  }

  changeDirection () {
    let n: Number = this.n;
    let m: Number = this.m;
    let count = 1;
    for (let i=0; i < m; i++) {
      this.grids[i] = [];
      for (let j=0; j < n; j++) {
        this.grids[i][j] = {
          i: i,
          j: j,
          text: '',
          value: count++
        };
      }
    }
    this.grids[this.start.i][this.start.j].text = 'S';
    this.grids[this.end.i][this.end.j].text = 'E';
  }

  up () {
    this.vDirection='up';
    if (this.start && this.end) {
      this.changeDirection();
      this.getPath();
    }
  }

  down () {
    this.vDirection='down';
    if (this.start && this.end) {
      this.changeDirection();
      this.getPath();
    }
  }
}
