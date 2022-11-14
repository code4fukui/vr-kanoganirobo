import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("kanouganirobo2022.csv");
const html = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>加能ガニロボットコンテスト2022出場カニロボ</title>
</head><body>
<h1>加能コンテスト2022出場カニロボ</h1>
${data.map(d => `<a href=kanirobo/${d.filename}><img src=kanirobo/${d.filename}></a>`).join("\n")}
<style>
body {
  text-align: center;
}
img {
  width: 31%;
}
</style>
<hr>
<a href=https://www.kanouganirobocon.com/>加能ガニロボットコンテスト</a><br>
<a href=https://github.com/code4fukui/vr-kanouganirobo>src on GitHub</a><br>
`;

await Deno.writeTextFile("kanirobo2022.html", html);
