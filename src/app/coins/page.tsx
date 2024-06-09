"use client";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import axios from "axios";
import { GET_PRICE_KEY } from "../../../constants/constants";
import { Button } from "@/components/ui/button";

const Coins = () => {
  const [usdPrice, setUsdPrice] = useState("");
  const [coinName, setCoinName] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const getBtcValues = () => {
    axios
      .get(`https://api.coinlore.net/api/tickers/`)
      .then((res) => {
        console.log(res.data.data[0]);
        setUsdPrice(`Usd: ${res.data.data[0].price_usd}`);
        setCoinName(res.data.data[0].name);
        setMarketCap(`Market Cap: ${res.data.data[0].market_cap_usd}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Card className="p-5 h-[200px] w-[200px] flex flex-col gap-3">
        <CardTitle>{coinName}</CardTitle>
        <p>{usdPrice}</p>
        <p>{marketCap}</p>
      </Card>
      <Button onClick={getBtcValues}>Hold</Button>
    </>
  );
};

export default Coins;
