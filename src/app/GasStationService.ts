import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { GasStation } from './GasStation';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GasStationService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getGasStationObserver(): Observable<GasStation> {
        return this.http
            .get(`http://fuel.dev/app_dev.php/search/G95/42,743111/-2,913306`)
            .map(response => response.json());
    }
}
