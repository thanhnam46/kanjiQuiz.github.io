import { Component, ViewChild } from "@angular/core";
import{ QuizerComponent } from "./quizer/quizer.component";
import { KANJISN52,KANJISN51,KANJISN41,KANJISN42,KANJISN43,KANJISN44,KANJISN32, KANJISN31, KANJISN33, KANJISN34, KANJISN35, KANJISN36, KANJISN37, KANJISN38, KANJISN39, KANJISN310, KANJISN311, KANJISN312 } from "./quizer/mock-kanjis";
import { asTextData } from "@angular/core/src/view";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "kanji";
  setList(){
    alert("set List here");
  }

  @ViewChild(QuizerComponent)
  myQuiz: QuizerComponent;

  setLevelN51(){
    this.myQuiz.setLevel(KANJISN51,"Kanji N5 Bài 1");
  }
  setLevelN52(){
    this.myQuiz.setLevel(KANJISN52,"Kanji N5 Bài 2");
  }
  setLevelN41(){
    this.myQuiz.setLevel(KANJISN41,"Kanji N4 Bài 1");
  }
  setLevelN42(){
    this.myQuiz.setLevel(KANJISN42,"Kanji N4 Bài 2");
  }
  setLevelN43(){
    this.myQuiz.setLevel(KANJISN43,"Kanji N4 Bài 3");
  }
  setLevelN44(){
    this.myQuiz.setLevel(KANJISN44,"Kanji N4 Bài 4");
  }
  setLevelN31(){
    this.myQuiz.setLevel(KANJISN31,"Kanji N3 Bài 1");
  }
  setLevelN32(){
    this.myQuiz.setLevel(KANJISN32, "Kanji N3 Bài 2");
  }
  setLevelN33(){
    this.myQuiz.setLevel(KANJISN33, "Kanji N3 Bài 3");
  }
  setLevelN34(){
    this.myQuiz.setLevel(KANJISN34, "Kanji N3 Bài 4");
  }
  setLevelN35(){
    this.myQuiz.setLevel(KANJISN35, "Kanji N3 Bài 5");
  }
  setLevelN36(){
    this.myQuiz.setLevel(KANJISN36, "Kanji N3 Bài 6");
  }
  setLevelN37(){
    this.myQuiz.setLevel(KANJISN37, "Kanji N3 Bài 7");
  }
  setLevelN38(){
    this.myQuiz.setLevel(KANJISN38, "Kanji N3 Bài 8");
  }
  setLevelN39(){
    this.myQuiz.setLevel(KANJISN39, "Kanji N3 Bài 9");
  }
  setLevelN310(){
    this.myQuiz.setLevel(KANJISN310, "Kanji N3 Bài 10");
  }
  setLevelN311(){
    this.myQuiz.setLevel(KANJISN311, "Kanji N3 Bài 11");
  }
  setLevelN312(){
    this.myQuiz.setLevel(KANJISN312, "Kanji N3 Bài 12");
  }
}
