import React from "react";
import { truppen } from "@/mockdata/truppen";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
async function geTableCellata() {
  //https://v3.football.api-sports.io/players/squads?team=42
  const res = await fetch(
    "https://v3.football.api-sports.io/players?id=20355&season=2019",
    {
      meTableHeadod: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.FOOTBALL_API_KEY,
      },
    }
  );
  // TableHeade return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // TableHeadis will activate TableHeade closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function PlayerInformation({ params: { id } }) {
  const getTable = await geTableCellata();
  console.log("tal", getTable.response[0]);
  return (
    <div className="full bg-black text-white min-h-screen">
      <section className="content flex pt-40 justify-center">
        {truppen.map((p, index) => (
          <div key={index}>
            <div className="flex">
              <img src="/martin.png" widTableHead="50%" />
              <div className="w-[50%] flex items-center flex-col justify-center">
                <h1>
                  {p.firstName} {p.lastName}
                </h1>
                <p>Ålder: {p.age}</p>
                <p>Position: {p.position}</p>
                <p>Nationalitet: {p.nationality}</p>
                <p>Tröjnummer: {p.shirtNumber}</p>
                <p>Längd: {p.height}</p>
                <p>Vikt: {p.weight}</p>
              </div>
            </div>
            <div>
              <h1>Statistik</h1>
            </div>
          </div>
        ))}
       
      </section>
      <section className="content">
      <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead colspan="2">
                <h3>Premier League</h3>
              </TableHead>
              <TableHead colspan="2">
                <h3>Champions League</h3>
              </TableHead>
              <TableHead colspan="2">
                <h3>FA-cupen</h3>
              </TableHead>
              <TableHead colspan="2">
                <h3>Ligacupen</h3>
              </TableHead>
              <TableHead colspan="2">
                <h3>Totalt</h3>
              </TableHead>
              <TableHead colspan="2">
                <h3>Kort</h3>
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead>
                <h3>Säsong</h3>
              </TableHead>
              <TableHead>
                Spelade
                <br />
                matcher
              </TableHead>
              <TableHead>
                Antal
                <br />
                mål
              </TableHead>
              <TableHead>
                Spelade
                <br />
                matcher
              </TableHead>
              <TableHead>
                Antal
                <br />
                mål
              </TableHead>
              <TableHead>
                Spelade
                <br />
                matcher
              </TableHead>
              <TableHead>
                Antal
                <br />
                mål
              </TableHead>
              <TableHead>
                Spelade
                <br />
                matcher
              </TableHead>
              <TableHead>
                Antal
                <br />
                mål
              </TableHead>
              <TableHead>
                Spelade
                <br />
                matcher
              </TableHead>
              <TableHead>
                Antal
                <br />
                mål
              </TableHead>
              <TableHead>
                <div
                  class="spelare-statistik-kort-gula"
                  title="Gula kort"
                ></div>
              </TableHead>
              <TableHead>
                <div
                  class="spelare-statistik-kort-roda"
                  title="Röda kort"
                ></div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHead>2019/2020</TableHead>
              <TableCell>2</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>1</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>3</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>2020/2021</TableHead>
              <TableCell>10</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>1</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>16</TableCell>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>2021/2022</TableHead>
              <TableCell>2</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>1</TableCell>
              <TableCell>0</TableCell>
              <TableCell>3</TableCell>
              <TableCell>0</TableCell>
              <TableCell>1</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
          </TableBody>
      
  
        </Table>
      </section>
    </div>
  );
}
