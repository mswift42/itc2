import {Theme} from './Theme';
import {Face} from './Face';

export class Themes {
  theme: Theme;

  static Whitesand() : Theme {
    var ws = new Theme([
      new Face("mainbg" , "#f5ebe1"),
      new Face("mainfg" , "#585858"),
      new Face("keyword", "#4a858c"),
      new Face("builtin", "#1a8591"),
      new Face("string", "#b3534b"),
      new Face("functionname", "#bd745e"),
      new Face("variable", "#476238"),
      new Face("type", "#8c4a79"),
      new Face("constant", "#697024"),
      new Face("comment", "#a9a9a9"),
      new Face("warning", "#ff1276"),
      new Face("warning2", "#ff4d12")
    ]
    );
    return ws;

  }


}
