import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  public firstNumber = new FormControl(null);
  public secondNumber = new FormControl(null);
  public result: number | undefined = undefined; //public result?: number;
  public operation = new FormControl('+');

  public calculation() {
    switch (this.operation.value) {
      case '+':
        this.result = Number(this.firstNumber.value) + Number(this.secondNumber.value);
        break;
      case '-':
        this.result = Number(this.firstNumber.value) - Number(this.secondNumber.value);
        break;
      case '*':
        this.result = Number(this.firstNumber.value) * Number(this.secondNumber.value);
        break;
      case '/':
        this.result = Number(this.firstNumber.value) / Number(this.secondNumber.value);
        break;
    }
  }

  public reset() {
    this.firstNumber.setValue(null);
    this.secondNumber.setValue(null);

    this.result = undefined;
  }
}
