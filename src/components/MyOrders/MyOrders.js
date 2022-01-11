import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../Layout/Layout";
import refresh from "../../images/refresh.svg";
import remove from "../../images/delete.svg";
import SearchIcon from "@mui/icons-material/Search";

const orders = [
  {
    projectName: "comm board lorem",
    lastUpdated: "11/01/22",
    status: "pending",
    orderId: "4346t",
    shippingId: "343453",
    total: 350,
  },
  {
    projectName: "comm board lorem",
    lastUpdated: "11/01/22",
    status: "pending",
    orderId: "4346t",
    shippingId: "343453",
    total: 35,
  },
];

const MyOrders = () => {
  return (
    <>
      <Layout>
        <Container sx={{ py: 6 }}>
          <Typography variant="h5">My Orders</Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField label="Serach by name" variant="standard" />
            </Box>
            <TableContainer
              sx={{ textAlign: "center", mt: 3, width: "100%" }}
              component={Paper}
            >
              <Table sx={{ minWidth: 650, margin: "auto" }}>
                <TableHead sx={{ bgcolor: "rgba(65, 119, 255, 0.2)" }}>
                  <TableRow>
                    <TableCell>project name</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">order id</TableCell>
                    <TableCell align="right">shipping id</TableCell>
                    <TableCell align="right">total</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow
                      key={order.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {order.projectName} <br />{" "}
                        <span>{order.lastUpdated}</span>
                      </TableCell>
                      <TableCell align="right">{order.status}</TableCell>
                      <TableCell align="right">{order.orderId}</TableCell>
                      <TableCell align="right">{order.shippingId}</TableCell>
                      <TableCell align="right">$ {order.total}</TableCell>
                      <TableCell align="right">
                        <Button sx={{ p: 0, m: 0 }}>
                          <img src={refresh} alt="" />
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button>
                          <img src={remove} alt="" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default MyOrders;
