import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-materials",
  templateUrl: "./materials.component.html",
  styleUrl: "./materials.component.scss",
})
export class MaterialsComponent implements ChapterComponent {
  @Input() data!: {
    materials: { label: string; url: string }[];
  };

  @Output() end = new EventEmitter<void>();
}
