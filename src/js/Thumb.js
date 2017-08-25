import PraiseButton from './PraiseButton'

class Thumb extends PraiseButton {
    showPraiseText() {
        this.drawPraiseText()
        this.praiseText.classList.add("text-show");
        setTimeout(() => {
            this.hidePraiseText()
        }, 500);
    }

    hidePraiseText() {
        this.praiseText.classList.remove("text-show");
    }
}

let run = new Thumb()
run.showPraiseText();