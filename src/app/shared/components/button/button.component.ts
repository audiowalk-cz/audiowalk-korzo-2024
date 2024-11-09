import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  host: {
    "[class.touching]": "buttonTouching",
    "(touchstart)": "onTouchStart()",
    "(touchend)": "onTouchEnd()",
    "[class.active]": "active",
  },
})
export class ButtonComponent {
  @Input() active: boolean = false;

  buttonTouching: boolean = false;

  onTouchStart() {
    this.buttonTouching = true;
  }

  onTouchEnd() {
    this.buttonTouching = false;
  }
}
