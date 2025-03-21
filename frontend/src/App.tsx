import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import ky from "ky";
import { LineChart } from "@mui/x-charts/LineChart";
import  Button  from "@mui/material/Button";

export default function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    ky.get("api/metrics").then(async (r) => {
      setData(await r.json());
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />
      </Box>
      <Button color="primary" >Refresh metrics</Button>
    </Container>
  );
}
