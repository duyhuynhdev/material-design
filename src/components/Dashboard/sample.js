export const dashboard_items = [
    {
        title: 'Plotly table demo',
        data: [
            {
                type: 'table',
                header: {
                  values: [["EXPENSES"], ["Q1"],
                               ["Q2"], ["Q3"], ["Q4"]],
                  align: "center",
                  line: {width: 1, color: 'black'},
                  fill: {color: ['rgb(17, 157, 255)']},
                  font: {family: "Arial", size: 12, color: "white"}
                },
                cells: {
                  values: [
                    ['Salaries', 'Office', 'Merchandise', 'Legal', 'TOTAL'],
                    [1200000, 20000, 80000, 2000, 12120000],
                    [1300000, 20000, 70000, 2000, 130902000],
                    [1300000, 20000, 120000, 2000, 131222000],
                    [1400000, 20000, 90000, 2000, 14102000]],
                  align: ["center","center"],
                  height: 40,
                  line: {color: "black", width: 1},
                  font: {family: "Arial", size: 12, color: ["black"]}
                }
            }
        ],
        cols: 1
    },
    {
        title: 'Plotly bar chart demo',
        data: [
            {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [20, 14, 23],
                name: 'SF Zoo',
                type: 'bar'
            },
            {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [12, 18, 29],
                name: 'LA Zoo',
                type: 'bar'
            }
        ],
        cols: 1
    },
    {
        title: 'Plotly pie chart demo',
        data: [{
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie'
          }],
        cols: 1
    },
    {
        title: 'Plotly line chart demo',
        data: [
            {
                x: [1, 2, 3, 4],
                y: [16, 5, 11, 9],
                type: 'scatter'
              },
              {
                x: [1, 2, 3, 4],
                y: [10, 15, 13, 17],
                type: 'scatter'
              }

        ],
        cols: 1
    },
    
];