const express = require("express");
const app = express();

const db = require("./config/config");

const cors = require("cors");

app.set("port", process.env.port || 4000);

app.use(
  cors({
    origin: "*", // 출처 허용 옵션
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
);

app.use(express.json());

app.get("/Gallary", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  db.query(`select * from Gallary`, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`Gallary Data : ${data}`);
    }
    res.send(data);
  });
});

app.post("/GallaryList", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const page = req.body.curPage;
  const pageSize = req.body.pageSize;

  console.log(`current page : ${page}, page size : ${pageSize}`);

  const startPage = (page - 1) * pageSize;

  db.query(
    `select * from Gallary limit ? offset ?`,
    [pageSize, startPage],
    (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(`Gallary Data : ${data}`);
      }
      res.send(data);
    }
  );
});

app.get("/count", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  db.query("select count(*) as cnt from Gallary", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`Gallary data length : ${data}`);
    }
    res.send(data);
  });
});

app.get("/Comment", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  db.query("select * from Comment", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`Comment Data : ${data}`);
    }

    res.send(data);
  });
});

app.get("/DiscoGraphy", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  db.query("select * from DiscoGraphy", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`DiscoGraphy Data : ${data}`);
    }

    res.send(data);
  });
});

app.get("/MainSlider", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  db.query("select * from MainSlider", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`MainSlider Data : ${data}`);
    }

    res.send(data);
  });
});

app.get("/GallarySlider", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  db.query("select * from GallarySlider", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`GallarySlider Data : ${data}`);
    }

    res.send(data);
  });
});

app.get("/IntroIndex", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  db.query("select * from IntroIndex", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`IntroIndex Data : ${data}`);
    }

    res.send(data);
  });
});

app.use(express.urlencoded({ extended: true }));

app.post("/CommentInsert", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const name = req.body.name;
  const content = req.body.content;
  const date = req.body.date;
  const title = req.body.title;

  db.query(
    "insert into Comment(name, content, date, title) values(?, ?, ?, ?)",
    [name, content, date, title],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }

      res.send(result);
    }
  );
});

app.patch("/likeUp", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const like = req.body.like;
  const id = req.body.id;

  db.query(
    `UPDATE Gallary SET likes = ? WHERE id = ?`,
    [like, id],
    (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(`success alter column : ${data}`);
      }
      res.send(data);
    }
  );
});

app.listen(app.get("port"), () => {
  console.log(`connect port is ${app.get("port")}`);
});
