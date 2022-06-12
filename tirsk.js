
const sendTirsk = (msg) => {
    const coming = [
        'tulen',
        'tuun',
        'tulossa',
        'tulkaa',
        'tulin',
        'tullaan',
        'tulkaa',
        'saan',
        'saat',
        'saadaan',
        'saatte',
        'saamme',
        'saatiin',
        'saitte',
        'sait',
        'sain',
        'sai',
        'come',
        'coming',
        'came',
    ]

    if(msg[0] !== '/'){
        for(let i = 0; i < coming.length; i += 1){
            if(msg.includes(coming[i])){
                return true
            }
        }
        return false
    }
}

module.exports = { sendTirsk }