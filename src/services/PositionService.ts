import RestTemplate from "../components/RestTemplate";
import { Position } from "../props/PositionProps";
import { BASE_URL,  POSITION } from "../util/Constant";

class PositionService {
  public async getPositions(customerId: string) {
    let positions:Position[] = [];
    const url = BASE_URL + POSITION.replace("{1}",customerId); 
    let res:any = await RestTemplate.get(url) ;    
        if (res?.statusMessage === "success") {   
          const contents = res?.data?.content;  
          contents.map((item:any) => { 
            let position = {
              instrumentId: item?.instrumentDetail?.instrumentId,
              instrumentName: item?.instrumentDetail?.instrumentName,
              instrumentPrice: item?.instrumentDetail?.instrumentPrice,
              units: item?.units, 
              } as Position;  
            positions.push(position);
          }); 
        }   
    return positions; 
  }
}

export default new PositionService();
