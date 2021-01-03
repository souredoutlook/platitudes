const audience = ['we','one','all of us', 'each of us', 'all of us together', ];
const imperative = ['must not', 'must', 'mustn\'t', 'can', 'cannot', 'can\'t', 'should', 'should not', 'shouldn\'t', 'had better', 'had better not', 'have to', 'need to', 'need not', 'dare to', 'dare not'];
const truism = ['remember to breathe.', 'put one foot in front of the other.', 'place trust in destiny.'];
const negism = ['abandon hope.', 'accept defeat.', 'lose faith.', 'retreat.']

function placate(){
    let noun =  audience[Math.floor(Math.random() * audience.length)];
    let modal = imperative[Math.floor(Math.random() * imperative.length)];
    if (noun === 'one'){
        switch (modal){
            case 'have to' :
                modal = 'has to';
                break;
            case 'need to' :
                modal = 'needs to';
                break;
            case 'need not' :
                modal = 'needs not';
                break;
            case 'dare to' :
                modal = 'dares to';
                break;
            case 'dare not':
                modal = 'dares not';
                break;
            default :
                break;
        }
    }
    let action;
    console.log(modal);
    if (modal.includes('not'/* || ('n\'t'))*/)){
        action = negism[Math.floor(Math.random() * negism.length)];
        console.log(modal.includes(('not' || 'n\'t')));
    } else if (modal.includes('n\'t')){
        action = negism[Math.floor(Math.random() * negism.length)];
    } else {
        action = truism[Math.floor(Math.random() * truism.length)];
        console.log(modal.includes(('not' || 'n\'t')));
    }
    return console.log(`In these trying times, ${noun} ${modal} ${action}`);
}

placate();
