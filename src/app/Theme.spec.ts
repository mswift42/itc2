import {Theme} from './Theme';
import {Face} from './Face';
import {Themes} from './Themes';

describe('Theme', () => {

    it('has an empty face list', () => {
        let theme = new Theme([]);
        expect(theme.faces.length).toEqual(0);
    });
    it('Themes.whitesand returns the whitesand theme', () => {
      let ws = Themes.Whitesand;
      expect(ws[0].name).toEqual("mainbg");
      expect(ws[0].color).toEqual("#f5ebe1");
    })

});
