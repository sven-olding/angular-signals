import { NgFor } from "@angular/common";
import { Component, computed, effect, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    this.counter.update((cur) => cur + 1);
    this.actions.mutate((old) => old.push("INCREMENT"));
  }

  decrement() {
    this.counter.update((cur) => cur - 1);
    this.actions.mutate((old) => old.push("DECREMENT"));
  }
}
