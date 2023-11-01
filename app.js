const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods.js");

// index.js 파일은 해당 폴더를 불러와도 바로 사용이 되기 때문에 폴더만 불러와도 ok
const connect = require("./schemas");
connect();

// body parser를 써서 request 안에 body 정보를 정상적으로 보고싶을 때 쓴다.
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
});

app.get("/", (req, res) => {
  console.log(req.query);
  const obj = {
    KeyKey: "value",
    name: "name",
  };
  //   res.send("정상적으로 반환되었습니다.");
  res.json(obj);
});

app.get("/:id", (req, res) => {
  console.log(req.params);

  res.send(":id URI에 정상적으로 반환됨");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// 이 경로로 오면 goodsRouter로 갈거야
// goodsRouter 자리는 배열로도 가능
app.use("/api", goodsRouter);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
