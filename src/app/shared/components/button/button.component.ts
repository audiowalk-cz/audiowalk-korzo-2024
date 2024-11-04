import { Component } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  host: {
    "[class.touching]": "buttonTouching",
    "(touchstart)": "onTouchStart()",
    "(touchend)": "onTouchEnd()",
  },
})
export class ButtonComponent {
  buttonTouching: boolean = false;

  onTouchStart() {
    this.buttonTouching = true;
  }

  onTouchEnd() {
    this.buttonTouching = false;
  }
}
