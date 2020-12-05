import { Line } from "react-chartjs-2";

export const TabelaRelatorios = (data) => {
  const state = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "Faturamento em R$",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#E83B86",
        borderColor: "#E83B86",
        borderWidth: 2,
        data: [
          (65).toLocaleString("pt-BR"),
          59,
          80,
          81,
          56,
          40,
          30,
          30,
          10,
          10,
          20,
          20,
        ],
      },
    ],
  };

  return (
    <Line
      data={state}
      height={500}
      width={800}
      options={{
        maintainAspectRatio: false,
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
      }}
    />
  );
};
