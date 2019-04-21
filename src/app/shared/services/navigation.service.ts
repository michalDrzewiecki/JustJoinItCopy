import { AppRouterUrls } from '../../app-routing.config';
import { ExperienceLevel, City, Technology } from '../shared.enums';

export class NavigationService {
    constructor(){}

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
}