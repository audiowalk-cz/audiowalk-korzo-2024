import { ChangeDetectorRef, Pipe, PipeTransform } from "@angular/core";

export type TypePipeOptions = {
  interval?: number;
  skipSpace?: boolean;
  randomizeInterval?: boolean;
  randomizationFactor?: number;
  cursor?: boolean;
  onEnd?: () => void;
};

@Pipe({
  name: "type",
  pure: false,
})
export class TypePipe implements PipeTransform {
  private value!: string;

  private currentValue: string = "";
  private timeout?: number;

  private interval = 50;
  private skipSpace = true;
  private randomizeInterval = true;
  private randomizationFactor = 4;
  private cursor = true;
  private onEnd?: () => void;

  constructor(private cdRef: ChangeDetectorRef) {}

  transform(value: string, options: Partial<TypePipeOptions> = {}): string {
    if (options.interval) this.interval = options.interval;
    if (options.skipSpace) this.skipSpace = options.skipSpace;
    if (options.randomizeInterval) this.randomizeInterval = options.randomizeInterval;
    if (options.randomizationFactor) this.randomizationFactor = options.randomizationFactor;
    if (options.cursor) this.cursor = options.cursor;
    if (options.onEnd) this.onEnd = options.onEnd;

    if (value !== this.value) {
      this.value = value;
      this.currentValue = "";

      this.nextLetter();
    }

    return this.currentValue + (this.cursor ? "_" : "");
  }

  nextLetter() {
    clearTimeout(this.timeout);
    if (this.value.length === this.currentValue.length) {
      this.onEnd?.();
      return;
    }

    this.currentValue += this.value[this.currentValue.length];

    if (this.skipSpace && this.value[this.currentValue.length] === " ") {
      this.currentValue += this.value[this.currentValue.length];
    }

    const interval = this.randomizeInterval
      ? this.interval + (Math.random() - 0.5) * this.interval * this.randomizationFactor
      : this.interval;

    this.cdRef.markForCheck();

    this.timeout = setTimeout(() => this.nextLetter(), interval) as any as number;
  }
}
