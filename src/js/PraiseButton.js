class PraiseButton {
    constructor() {
        this.showPraiseText = this.showPraiseText.bind(this)
        this.praiseText = null
        this.praiseHand = null
    }
    drawPraiseText() {
        this.praiseHand = document.getElementById('hand');
        this.praiseText = document.getElementById('praise-text');
        this.praiseText.innerText = '+1';
        // this.praiseHand.appendChild(this.praiseText);
        this.praiseHand.onclick = this.showPraiseText;
    }
}

export default PraiseButton