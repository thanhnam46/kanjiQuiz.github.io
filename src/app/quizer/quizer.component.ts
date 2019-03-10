import { Component, OnInit, NgModule, Renderer2 } from "@angular/core";

import { KANJISN31 } from "../quizer/mock-kanjis";
import { Kanji } from "./kanji";

@Component({
  selector: "app-quizer",
  templateUrl: "./quizer.component.html",
  styleUrls: ["./quizer.component.css"]
})
export class QuizerComponent implements OnInit {
  learningList = Array.from(KANJISN31);
  level: string = "Kanji N3 bài 1";
  JLPT = Array.from(this.learningList);
  card: string = "Start";
  question: Kanji;
  answer: Kanji[] = [];
  isCorrect: boolean;
  selectedRow: number;
  nextCard: boolean; //Kiem tra an nextCard: neu an next Card: reset tat ca dap an ve class ban dau
  isClicked: boolean = false; //Kiem tra da chon dap an hay chua, neu da chon 1 dap an, khong cho chon dap an khac
  isNextLevel:boolean = false;
  thongBao: string = "Ấn START để bắt đầu hoặc chọn bài học tương ứng từ menu chính";

  point: number = 0;
  numberOfclicks: number = 0;
  correctClicks: number = 0;
  incorrectClicks: number = 0;

  nextQuestion() {
    if (!this.isClicked) {
      if (this.JLPT.length > 0) {        
        this.question = this.JLPT[
          Math.floor(Math.random() * (this.JLPT.length - 1)) + 0
        ];
        this.card = this.question.kanji;
        this.answer = this.generateAnswerList(this.learningList, 9);
      } else {
        alert("Finish");
        location.reload();
      }

      if (this.answer.includes(this.question)) {
        this.answer = this.answer;
      } else {
        this.answer[Math.floor(Math.random() * 8) + 0] = this.question;
      }
      this.nextCard = true;
      this.isClicked = true;
      this.isNextLevel = false;
      this.thongBao="Vui lòng chọn 1 đáp án";
    } else {
      this.thongBao = "Vui lòng chọn 1 đáp án";
    }
  }

  generateAnswerList(answerList, n) {
    var result = new Array(n),
      len = answerList.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError(
        "generate Answer: more elements taken than available"
      );
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = answerList[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }

    return result;
  }

  checkAnswer(i, bx) {
    if (this.isClicked) {
      this.selectedRow = i;
      this.nextCard = false;
      this.numberOfclicks++;
      if (this.card == bx) {
        this.thongBao = "Chính xác";
        this.correctClicks = this.correctClicks + 1;
        this.point = Math.round(
          (this.correctClicks / this.numberOfclicks) * 100
        );
        this.isCorrect = true;
        console.log(this.isCorrect);
        console.log(bx);
        this.JLPT.splice(this.JLPT.indexOf(this.question), 1);
      } else {
        this.thongBao = "Chưa chính xác";
        this.isCorrect = false;
        this.incorrectClicks = this.incorrectClicks + 1;
        this.point = Math.round(
          (this.correctClicks / this.numberOfclicks) * 100
        );
      }
      this.isClicked = false;
    } else {
      this.thongBao = "Ban khong duoc phep thay doi dap an";
    }
  }

  setLevel(wordList: Kanji[], titleLevel: string) {
    this.learningList = Array.from(wordList);
    this.JLPT = Array.from(this.learningList);
    this.level = titleLevel;
    this.incorrectClicks = 0;
    this.correctClicks = 0;
    this.point = 0;
    this.card = "Start";
    this.isClicked = false;
    this.answer = [];
    this.thongBao = "Ấn START để bắt đầu hoặc chọn bài học tương ứng từ menu chính";
    this.isNextLevel = true;
  }

  constructor() {}

  ngOnInit() {}
}
