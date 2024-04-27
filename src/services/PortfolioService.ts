import RestTemplate from "../components/RestTemplate";
import { BASE_URL, PORTFOLIO } from "../util/Constant";

class PortfolioService {
  public async getPortfolios(customerId: string) {
    const url = BASE_URL + PORTFOLIO.replace("{1}",customerId);
    let res:any = await RestTemplate.get(url) ;   
        let portfolio = {
            customerName: "",
            portfolioNumber: "",
            portfolioValue: "",
            currentPerformance: "",
            investmentStrategy: "",
          } as Portfolio;  
          
        if (res?.statusMessage === "success") {   
          const data = res?.data; 
          portfolio.customerName = data.customerName;
          portfolio.portfolioNumber = data.portfolioNumber;
          portfolio.portfolioValue = data.portfolioValue;
          portfolio.currentPerformance = data.currentPerformance;
          portfolio.investmentStrategy = data.investmentStrategy; 
        }  
        
    return portfolio;
    
    
    
  }
}

export default new PortfolioService();
