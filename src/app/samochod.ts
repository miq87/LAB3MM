export class Samochod {
    
    marka: string
    model: string
    rok?: number

    constructor(marka, model, rok?) {
        this.marka = marka
        this.model = model
        this.rok = rok
    }

}
