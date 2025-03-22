import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import ky from "ky";
import { LineChart } from "@mui/x-charts/LineChart";
import  Button  from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    try {
      const res = await ky.get('api/metrics');
      const resToJson = await res.json<any[]>();
      setData(resToJson);
    } catch(err) {
      toast.error(err instanceof Error ? err.message : "Une erreur s'est produite");
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <LineChart
          xAxis={[{ data: data.map((item) => item.id) }]}
          series={[
            {
              data: data.map((item) => item.value),
            },
          ]}
          width={1000}
          height={500}
        />
      </Box>
      <Button color="primary" onClick={() => getData()}>Refresh metrics</Button>
      <ToastContainer />
    </Container>
  );
}
