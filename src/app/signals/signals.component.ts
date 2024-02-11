import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    this.counter.update((cur) => cur + 1);
    this.actions.mutate((old) => old.push("INCREMENT"));
  }

  decrement() {
    this.counter.update((cur) => cur - 1);
    this.actions.mutate((old) => old.push("DECREMENT"));
  }
}
