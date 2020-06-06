var data = [
  {
    type: "indicator",
    mode: "gauge",
    value: 500,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.08, 0.25] },
    title: { text: "Sprite" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 1000] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 900
      },
      steps: [
        { range: [0, 400], color: "lightgreen" },
      ],
      bar: { color: "green" }
    }
  },
  {
    type: "indicator",
    mode: "gauge",
    value: 500,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.4, 0.6] },
    title: { text: "Fanta" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 1000] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 900
      },
      steps: [
        { range: [0, 700], color: "maroon" },
      ],
      bar: { color: "red" }
    }
  },
  {
    type: "indicator",
    mode: "gauge",
    value: 4000,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.7, 0.9] },
    title: { text: "Coca Cola" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 4500] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 3000
      },
      steps: [
        { range: [0, 2000], color: "lightgreen" },
      ],
      bar: { color: "green" }
    }
  },
  {
    type: "indicator",
    mode: "gauge",
    value: 4000,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.00001, 0.00091] },
    title: { text: "Cappy" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 4500] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 3000
      },
      steps: [
        { range: [0, 2000], color: "lightgreen" },
      ],
      bar: { color: "green" }
    }
  }
];

var layout = {
  width: 800, height: 500,
  margin: { t: 30, r:30, l:30 , b: 30 }
};
Plotly.newPlot('myDiv', data, layout);