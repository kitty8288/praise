class PraiseButton {
    constructor() {
        this.showPraiseText = this.showPraiseText.bind(this)
        this.praiseText = null;
        this.praiseHand = null;
        this.count = 0;
    }
    drawPraiseText() {
        this.praiseHand = document.getElementById('hand');
        this.praiseText = document.getElementById('praise-text');
        this.praiseText.innerText = '+1';
        this.praiseHand.onclick = this.showPraiseText;
        this.count++;
    }
}

export default class Thumb extends PraiseButton {
    showPraiseText() {
        this.drawPraiseText();
        this.praiseText.classList.add("text-show");
        if (this.count === 11) {
            let handDiv = document.getElementById('hand');
            handDiv.style.backgroundColor = "#c7c4c4";
        }
        setTimeout(() => {
            this.hidePraiseText()
        }, 500);
    }

    hidePraiseText() {
        this.praiseText.classList.remove("text-show");
    }
}

// let run = new Thumb()
// run.showPraiseText();