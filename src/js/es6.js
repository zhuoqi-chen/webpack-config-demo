class ES6 {
    constructor(){
        console.log('hi es6');
        this.init();
    }
    myPromose(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done')
            }, 3000);
        });
    }
    async init(){
        const result = await this.myPromose()
        console.log(result);
    }
    log(text){
        console.log(text);
    }

}
export default ES6;