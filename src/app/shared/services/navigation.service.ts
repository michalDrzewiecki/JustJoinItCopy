import { AppRouterUrls } from '../../app-routing.config';
import { ExperienceLevel, City, Technology } from '../shared.enums';

export class NavigationService {
    isSMDevice: boolean = false;
    constructor(){}

    setSMDevice(){
        this.isSMDevice = true;
    }
    unsetSMDevice(){
        this.isSMDevice = false;
    }
    getSMDevice():boolean{
        return this.isSMDevice;
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
    getCities(mainCities: string[], hiddenCities: string[]){
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

    getTechnologies(mainTechnologies: string[], hiddenTechnologies: string[]){
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
}