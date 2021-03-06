import image from './assets/image.jpg';
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks.js';

export const model = [
    new TitleBlock('Добро пожаловать в Японию', {
        tag: 'h3',
        styles: {
            padding: '15px 30px'
        }
    }),
    new TextBlock('Япония — это уникальное азиатское островное государство, история которого насчитывает тысячелетия.', {
        styles: {
            padding: '5px 30px'
        }
    }),
    new ColumnsBlock([
        'Япония — небольшое государство, расположенное на более чем 6 тысячах островах, площадью около 378 тысяч квадратных километров. Это одна из густонаселенных стран мира с большой плотностью населения. Здесь проживает почти 127 миллионов человек, что всего на 17 миллионов человек меньше, чем в огромной России.',
        'Япония входит в десятку стран мира по уровню жизни людей. Она является второй экономикой в Азии, уступив в последнее время лишь своему соседу — Китаю. Одной из причин успешности японцев является их трудоголизм.',
        'Несмотря на принятые демократические ценности, Страна восходящего солнца сохранила свою монархию. Император остается символом единения японцев и верности традициям.'
    ], {
        styles: {
            padding: '25px 30px',
            'font-size': '17px'
        }
    }),
    new ImageBlock(image, {
        alt: 'Картиночка',
        styles: {
            width: '100%',
            'max-width': '600px',
            margin: '0 auto',
            'border-radius': '15px',
            overflow: 'hidden'
        },
        imageStyles: {
            width: '100%'
        }
    })
];