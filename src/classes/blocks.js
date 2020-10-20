import {row, col, css} from '../utils.js';

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Не реализован метод toHTML.');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options;
        return row(`<${tag}>${col(this.value)}</${tag}>`, css(styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles} = this.options;

        console.log(styles);
        return row(`<p>${col(this.value)}</p>`, css(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles} = this.options;
        const html = this.value.map(col).join('');

        return row(html, css(styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles, imageStyles: is, alt = ''} = this.options;

        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}">`, css(styles));
    }
}


