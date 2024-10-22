import { ChangeDetectorRef, Pipe, PipeTransform } from "@angular/core";

export type TypePipeOptions = {
  interval: number;
  skipSpace: boolean;
  randomizeInterval: boolean;
  randomizationFactor: number;
  cursor: boolean;
};

@Pipe({
  name: "type",
  pure: false,
})
export class TypePipe implements PipeTransform {
  private value!: string;

  private currentValue: string = "";
  private timeout?: number;

  private readonly defaultOptions: TypePipeOptions = {
    interval: 50,
    skipSpace: true,
    randomizeInterval: true,
    randomizationFactor: 4,
    cursor: true,
  };

  private options = this.defaultOptions;

  constructor(private cdRef: ChangeDetectorRef) {}

  transform(value: string, options: Partial<TypePipeOptions> = {}): string {
    this.options = { ...this.defaultOptions, ...options };

    if (value !== this.value) {
      this.value = value;
      this.currentValue = "";

      this.nextLetter();
    }

    return this.currentValue + (this.options.cursor ? "_" : "");
  }

  nextLetter() {
    clearTimeout(this.timeout);
    if (this.value.length === this.currentValue.length) return;

    this.currentValue += this.value[this.currentValue.length];

    if (this.options.skipSpace && this.value[this.currentValue.length] === " ") {
      this.currentValue += this.value[this.currentValue.length];
    }

    const interval = this.options.randomizeInterval
      ? this.options.interval + (Math.random() - 0.5) * this.options.interval * this.options.randomizationFactor
      : this.options.interval;

    this.cdRef.markForCheck();

    this.timeout = setTimeout(() => this.nextLetter(), interval) as any as number;
  }
}
