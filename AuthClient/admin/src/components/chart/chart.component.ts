import { Component } from "@angular/core";
import { ChallengeService } from "../../services/challenge.service";
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'app-chart',
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  chartData: number[] = [];
  chartCategories: string[] = [];
  chartOptions: any;
  
constructor(private challengeService: ChallengeService){
}
  ngOnInit() {
    this.fetchChallenges();
  }

  fetchChallenges() {
    this.challengeService.getChallengeVotes().subscribe(data => {    
      this.chartCategories = data.map(challenge => challenge.title);
      this.chartData = data.map(challenge => challenge.votes); 
      this.updateChart();
    });
  }
  updateChart() {
    this.chartOptions = {
      series: [
        {
          name: "Votes",
          data: this.chartData
        }
      ],
      chart: {
        height: 350,
        type: "bar",
      },
      colors: [
        "#D10CE8",
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#546E7A",
        "#775DD0",
        "#26a69a",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: true
      },
      xaxis: {
        categories: this.chartCategories,
        labels: {
          rotate: -45,
          style: {
            colors: [
              "#D10CE8",
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }
  }
