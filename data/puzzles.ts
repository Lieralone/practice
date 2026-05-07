/**
 * demo puzzles only
 */

import { Puzzle } from "@/types/game";

export const puzzles: Puzzle[] = [
  {
    id: "puzzle-demo-1",
    date: "2026-05-02",
    groups: [
      {
        id: "g1",
        color: "yellow",
        connection: "Parte ng Katawan",
        words: [
          { id: "w1", text: "Buntuk", language: "kapampangan", translation: "Ulo" },
          { id: "w2", text: "Taklay", language: "pangasinense", translation: "Braso" },
          { id: "w3", text: "Talampakan ", language: "tagalog" },
          { id: "w4", text: "Balakang ", language: "tagalog" },
        ],
      },
      {
        id: "g2",
        color: "green",
        connection:
          "Mga Estruktura sa siyudad",
        words: [
          { id: "w5", text: "Dalan", language: "kapampangan", translation: "Daan/Kalsada" },
          { id: "w6", text: "Simbaan", language: "pangasinense", translation: "Simbahan" },
          { id: "w7", text: "Gusali", language: "tagalog" },
          { id: "w8", text: "Tulay", language: "tagalog" },
        ],
      },
      {
        id: "g3",
        color: "blue",
        connection: "Mga Financial Terms",
        words: [
          { id: "w9", text: "Kuwalta", language: "kapampangan", translation: "Pera/Salapi" },
          { id: "w10", text: "Manbayar", language: "pangasinense", translation: "Magbayad" },
          { id: "w11", text: "Resibo", language: "tagalog" },
          { id: "w12", text: "Puhunan", language: "tagalog",
          },
        ],
      },
      {
        id: "g4",
        color: "purple",
        connection: "Mga Kagamitan na Makikita sa Hardin",
        words: [
          { id: "w13", text: "Gabu'n", language: "kapampangan", translation: "Lupa" },
          { id: "w14", text: "Barang", language: "pangasinense", translation: "Bolo/Itak" },
          { id: "w15", text: "Paso", language: "tagalog" },
          { id: "w16", text: "Kalaykay ", language: "tagalog" },
        ],
      },
    ],
  },
];
