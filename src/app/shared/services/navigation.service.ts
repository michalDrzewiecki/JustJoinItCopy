import { AppRouterUrls } from '../../app-routing.config';
import { ExperienceLevel, City, Technology, MyParams } from '../shared.enums';
import { Subject } from 'rxjs';
import { Router, UrlTree, UrlSegmentGroup, UrlSegment } from '@angular/router';

export class NavigationService {
    DEFAULT_THEME: string = "light";
    DARK_THEME: string = "dark";
    DEFAULT_PARAM: string = "all";
    result: Subject<{actual: string, last: string}> = new Subject<{actual: string, last: string}>();

    constructor(){
        this.result.next({actual: this.DEFAULT_THEME,last: this.DARK_THEME});
    }

    changeTheme(result: boolean): void{
        if(!result){
            this.result.next({actual: this.DEFAULT_THEME,last: this.DARK_THEME});
        }
        else{
            this.result.next({actual: this.DARK_THEME,last: this.DEFAULT_THEME});
        }
    }

    getAppRouterUrls(){
        return AppRouterUrls;
    }
    getExperienceLevelArray():string[]{
        let levels: string[] = [];
        for(let exp in ExperienceLevel){
            if(isNaN(Number(exp))){
                levels.push(exp);
            }   
        }
        return levels.slice();
    }
    getCities(mainCities: string[], hiddenCities: string[]): void{
        for(let city in City){
            if(isNaN(Number(city))){
                if(Number(City[city]) == 1){
                    mainCities.push(city);
                }
                else{
                    hiddenCities.push(city);
                }
            } 
        }
    }
    getTechnologies(mainTechnologies: string[], hiddenTechnologies: string[]):void{
        for(let technology in Technology){
            if(isNaN(Number(technology))){
                if(Number(Technology[technology]) == 1){
                    mainTechnologies.push(technology);
                }
                else{
                    hiddenTechnologies.push(technology);
                }
            } 
        }
    }
    getRouteParams(router: Router): string[]{
        let params: string[] = [];
        const tree: UrlTree = router.parseUrl(router.url);
        const g: UrlSegmentGroup = tree.root.children["primary"];
        const s: UrlSegment[] = g.segments;
        for(let param of s){
            params.push(param.path);
        }
        return params;
    }
    setParam(router: Router, paramType: MyParams, param: string):void{
        let actualParams: string[] = this.getRouteParams(router);
        let finalParams: string[] = [this.DEFAULT_PARAM, this.DEFAULT_PARAM, this.DEFAULT_PARAM, this.DEFAULT_PARAM];
        let iterator = 0;
        for(let p of actualParams){
            if(p!=this.getAppRouterUrls().OFFERS.substr(1)){
                finalParams[iterator] = p;
                iterator++;
            }
        }
        finalParams[paramType] = param;
        for(let i = finalParams.length-1; i >= 0; i--){
            if(finalParams[i] == this.DEFAULT_PARAM){
                finalParams.pop();
            }
            else{
                break;
            }
        }
        let route: string = "";
        for(let param of finalParams){
            route += '/' + param;
        }
        router.navigateByUrl(route);
    }
    checkParam(router: Router, myParam: MyParams): string{
        let actualParams: string[] = this.getRouteParams(router);
        return actualParams[myParam];
    }
}