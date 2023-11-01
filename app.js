const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");

// index.js 파일은 해당 폴더를 불러와도 바로 사용이 되기 때문에 폴더만 불러와도 ok
const connect = require("./schemas");
connect();

// 하단의 middleware가 app.use("/api", [goodsRouter]) 보다 위에 작성되어야 합니다.
// middleware는 순차적으로 거쳐가기 때문
app.use(express.json());

app.use("/api", [goodsRouter, cartsRouter]);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
