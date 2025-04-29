import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // emit: any;
  // constructor(){}
  
  //  @Input() newMessage: string = "";

 
  
  
}

  // outputArr!: any;
  // Input = [
  //   [1, 5],
  //   [2, 4],
  //   [4, 6],
  //   [6, 9],
  //   [10, 11]
  // ];

  // SmallestNumber!: any;
  // smallestNumberContainingArrNumber!: any;
  // overlapArrFix!: any;

  // @Output() receiveMessage = new EventEmitter<string>();

  // ngOnInit() {
  //   // console.log('test');
  //   // Input: arr[] = [[6, 8], [9, 10], [1, 3], [2, 4],]
  //   // Output: [[1, 4], [6, 8], [9, 10]]
  //   this.overLap(this.Input);
  //   // console.log(this.overLap(this.Input))
  // }

  // overLap(inputArr: any) {
  //   this.SmallestNumber = inputArr[0][0];
  //   this.smallestNumberContainingArrNumber = 0;
  //   for (let i = 0; i < inputArr.length; i++) {
  //     if (this.SmallestNumber > inputArr[i][0]) {
  //       this.SmallestNumber = inputArr[i][0];
  //       this.smallestNumberContainingArrNumber = i;
  //     }
  //   }

  //   this.overlapArrFix = inputArr[this.smallestNumberContainingArrNumber];
  //  // console.log("🚀 ~ ChildComponent ~ overLap ~ this.overlapArrFix:", this.overlapArrFix)

  //   for (
  //     let j = this.smallestNumberContainingArrNumber; j < inputArr.length;j++
  //   ) {
  //     if (inputArr[j + 1]) {
  //       if (this.overlapArrFix[1] >= inputArr[j + 1][0]) {
  //         if (this.overlapArrFix[1] < inputArr[j + 1][1]) {
  //           this.overlapArrFix.pop();
  //           this.overlapArrFix.push(inputArr[j + 1][1]);
  //         }
  //       }
  //     }
  //   }

  //   console.log(
  //     '🚀 ~ ChildComponent ~ overLap ~ this.overlapArrFix:',
  //     this.overlapArrFix
  //   );

  //   //return this.outputArr;
  // }

 
