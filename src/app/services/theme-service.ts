import {Theme} from "../Theme";
import {Face} from "../Face";
import {Injectable} from "angular2/angular2";

@Injectable()
export class ThemeService {
	theme: Theme;

    get() : Theme {
		return this.theme;
	}
	set(theme: Theme) {
		this.theme = theme;
	}
	changeColor(face: Face): void {
		for (var i of this.theme.faces) {
			if (i.name == face.name) {
				i.color = face.color;
			}
		}
	}
}