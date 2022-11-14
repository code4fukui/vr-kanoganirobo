import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const robos = await dir2array("kanirobo");
const data = robos.filter(r => r.endsWith(".jpg")).map(r => ({ filename: r}));
await Deno.writeTextFile("kanouganirobo2022.csv", CSV.stringify(data));
