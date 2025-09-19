// src/data.ts

import entreNosotrosCover from './album_covers/entre_nosotros.jpg';
import shinyCover from './album_covers/shiny.jpg';
import yogurcitoRemixCover from './album_covers/yogurcito.jpg';
import todoKeVerCover from './album_covers/todo_ke_ver.jpg';
import bajoDeLaPielCover from './album_covers/bajo_de_la_piel.jpg';
import tuVasSinCover from './album_covers/tu_vas_sin.jpg';
import insuperableCover from './album_covers/insuperable.jpg';


import badBunnyArtist from './album_covers/bad_bunny.jpg';
import karolGArtist from './album_covers/karol_g.jpg';
import rauwAlejandroArtist from './album_covers/rauw_alejandro.jpg';
import jBalvinArtist from './album_covers/j_balvin.jpg';
import malumaArtist from './album_covers/maluma.jpg';
import feidArtist from './album_covers/feid.jpg';
import fuerzaRegidaArtist from './album_covers/fuerza_regida.jpg';


export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string; // Path to image
  explicit?: boolean;
  audioFile: string; // Path to audio file (e.g., 'entre_nosotros.mp3')
}

export interface Artist {
  id: string;
  name: string;
  image: string; // Path to image
}

export const trendingSongs: Song[] = [
  {
    id: '1',
    title: 'entre nosotros',
    artist: 'Corona, Lu de la Tower',
    cover: entreNosotrosCover,
    explicit: true,
    audioFile: 'entre_nosotros.mp3', // Placeholder
  },
  {
    id: '2',
    title: 'Shiny',
    artist: 'Easykid',
    cover: shinyCover,
    audioFile: 'shiny.mp3', // Placeholder
  },
  {
    id: '3',
    title: 'YOGURCITO REMIX (feat. Kris R., ROA)',
    artist: 'Blessd, Anuel AA, Yan Block, Luar La L',
    cover: yogurcitoRemixCover,
    explicit: true,
    audioFile: 'yogurcito.mp3', // Placeholder
  },
  {
    id: '4',
    title: 'TODO KE VER',
    artist: 'Jere Klein, Katteyes, Mateo on the Beatz',
    cover: todoKeVerCover,
    audioFile: 'todo_ke_ver.mp3', // Placeholder
  },
  {
    id: '5',
    title: 'Bajo De La Piel',
    artist: 'Milo j',
    cover: bajoDeLaPielCover,
    audioFile: 'bajo_de_la_piel.mp3', // Placeholder
  },
  {
    id: '6',
    title: 'TU VAS SIN (fav)',
    artist: 'Rels B',
    cover: tuVasSinCover,
    audioFile: 'tu_vas_sin.mp3', // Placeholder
  },
  {
    id: '7',
    title: 'Insuperable',
    artist: 'Luis Vega',
    cover: insuperableCover,
    audioFile: 'insuperable.mp3', // Placeholder
  },

];

export const popularArtists: Artist[] = [
  {
    id: 'a1',
    name: 'Bad Bunny',
    image: badBunnyArtist,
  },
  {
    id: 'a2',
    name: 'KAROL G',
    image: karolGArtist,
  },
  {
    id: 'a3',
    name: 'Rauw Alejandro',
    image: rauwAlejandroArtist,
  },
  {
    id: 'a4',
    name: 'J Balvin',
    image: jBalvinArtist,
  },
  {
    id: 'a5',
    name: 'Maluma',
    image: malumaArtist,
  },
  {
    id: 'a6',
    name: 'Feid',
    image: feidArtist,
  },
  {
    id: 'a7',
    name: 'Fuerza Regida',
    image: fuerzaRegidaArtist,
  },

];

export const popularAlbumsAndSingles: Song[] = [
  {
    id: 's1',
    title: 'Un Verano Sin Ti',
    artist: 'Bad Bunny',
    cover: badBunnyArtist,
    audioFile: 'un_verano_sin_ti.mp3', // Placeholder
  },
  {
    id: 's2',
    title: 'Mañana Será Bonito',
    artist: 'KAROL G',
    cover: karolGArtist,
    audioFile: 'manana_sera_bonito.mp3', // Placeholder
  },
  {
    id: 's3',
    title: 'Saturno',
    artist: 'Rauw Alejandro',
    cover: rauwAlejandroArtist,
    audioFile: 'saturno.mp3', // Placeholder
  },
  {
    id: 's4',
    title: 'Jose',
    artist: 'J Balvin',
    cover: jBalvinArtist,
    audioFile: 'jose.mp3', // Placeholder
  },
  {
    id: 's5',
    title: 'Papi Juancho',
    artist: 'Maluma',
    cover: malumaArtist,
    audioFile: 'papi_juancho.mp3', // Placeholder
  },
  {
    id: 's6',
    title: 'Ferxxo (Vol 1: M.O.R)',
    artist: 'Feid',
    cover: feidArtist,
    audioFile: 'ferxxo.mp3', // Placeholder
  },
  {
    id: 's7',
    title: 'Del Barrio Hasta Aquí',
    artist: 'Fuerza Regida',
    cover: fuerzaRegidaArtist,
    audioFile: 'del_barrio_hasta_aqui.mp3', // Placeholder
  },

];