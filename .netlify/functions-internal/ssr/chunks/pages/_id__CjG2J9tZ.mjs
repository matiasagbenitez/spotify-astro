/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as addAttribute, f as createAstro, g as renderSlot, h as renderHead, i as renderTransition } from '../astro_CsBkAgWq.mjs';
import 'kleur/colors';
import 'html-escaper';
import cn from 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { create } from 'zustand';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

const colors = {
  red: { accent: "#da2735", dark: "#7f1d1d" },
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  teal: { accent: "#2ee9d7", dark: "#134e4a" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  indigo: { accent: "#394bd5", dark: "#312e81" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  pink: { accent: "#f33b73", dark: "#831843" },
  emerald: { accent: "#0c6e54", dark: "#064e3b" },
  rose: { accent: "#ed2377", dark: "#871b48" },
  gray: { accent: "#555555", dark: "#27272a" }
};

const playlists = [
  {
    id: "1",
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover: "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"]
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover: "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"]
  },
  {
    id: "3",
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"]
  },
  {
    id: "4",
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"]
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"]
  }
];
const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more"
}));
const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side"
}));
const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists
];
const songs = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  }
];

const $$Time = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>`;
}, "/home/maguben/projects/spotify-astro/src/icons/Time.astro", void 0);

const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    volume: 1,
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex touch-none select-none items-center group",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-400" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Randomize = ({ className, color = "#fafafa" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    fill: color,
    width: "16",
    height: "16",
    viewBox: "0 0 32.00 32.00",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    strokeWidth: "0.00032",
    children: [
      /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
      /* @__PURE__ */ jsx(
        "g",
        {
          id: "SVGRepo_tracerCarrier",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "#CCCCCC",
          strokeWidth: "0.128"
        }
      ),
      /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
        " ",
        /* @__PURE__ */ jsx("title", { children: "random" }),
        " ",
        /* @__PURE__ */ jsx("path", { d: "M0 24q0 0.832 0.576 1.44t1.44 0.576h1.984q2.048 0 3.904-0.8t3.168-2.144 2.144-3.2 0.8-3.872q0-2.464 1.728-4.224t4.256-1.76h4v1.984q0 0.672 0.384 1.152t0.864 0.704 1.12 0.128 1.056-0.544l4-4q0.608-0.64 0.576-1.44t-0.576-1.408l-4-4q-0.48-0.448-1.088-0.544t-1.12 0.128-0.864 0.704-0.352 1.12v2.016h-4q-2.016 0-3.872 0.8t-3.2 2.112-2.144 3.2-0.768 3.872q0 2.496-1.76 4.256t-4.256 1.76h-1.984q-0.832 0-1.44 0.576t-0.576 1.408zM0 8.032q0 0.832 0.576 1.408t1.44 0.576h1.984q1.408 0 2.592 0.608t2.080 1.664q0.672-2.048 1.984-3.68-2.912-2.592-6.656-2.592h-1.984q-0.832 0-1.44 0.608t-0.576 1.408zM13.376 23.456q2.848 2.56 6.624 2.56h4v2.016q0 0.64 0.384 1.152t0.864 0.704 1.12 0.096 1.056-0.544l4-4q0.608-0.608 0.576-1.44t-0.576-1.376l-4-4q-0.48-0.48-1.088-0.576t-1.12 0.128-0.864 0.736-0.352 1.12v1.984h-4q-1.376 0-2.592-0.576t-2.048-1.664q-0.704 2.048-1.984 3.68z" }),
        " "
      ] })
    ]
  }
);
const Repeat = ({ color = "#fafafa" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    children: [
      /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
      /* @__PURE__ */ jsx(
        "g",
        {
          id: "SVGRepo_tracerCarrier",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
        " ",
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14 7H15.9992C19.3129 7 21.9992 9.68629 21.9992 13C21.9992 16.3137 19.3129 19 15.9992 19H8C4.68629 19 2 16.3137 2 13C2 9.68629 4.68629 7 8 7H10M7 4L10 7M10 7L7 10",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        " "
      ] })
    ]
  }
);
const Previous = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "icon icon-tabler icons-tabler-filled icon-tabler-player-track-prev",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" }),
      /* @__PURE__ */ jsx("path", { d: "M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" })
    ]
  }
);
const Next = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "icon icon-tabler icons-tabler-filled icon-tabler-player-track-next",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" }),
      /* @__PURE__ */ jsx("path", { d: "M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" })
    ]
  }
);
const Playing = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    role: "img",
    height: "20",
    width: "20",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#1ED760",
    children: [
      /* @__PURE__ */ jsxs("rect", { x: "1", y: "3", width: "2", height: "10", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            values: "10;2;10",
            dur: "1s",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            values: "3;9;3",
            dur: "1s",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("rect", { x: "5", y: "3", width: "2", height: "10", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            values: "10;6;10",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.2s"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            values: "3;7;3",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.2s"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("rect", { x: "9", y: "3", width: "2", height: "10", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            values: "10;2;10",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.4s"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            values: "3;9;3",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.4s"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("rect", { x: "13", y: "3", width: "2", height: "10", children: [
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "height",
            values: "10;6;10",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.6s"
          }
        ),
        /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "y",
            values: "3;7;3",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.6s"
          }
        )
      ] })
    ]
  }
);
const Pause = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" })
  }
);
const Play = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" })
  }
);
const VolumeSilence = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen apagado",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z" }),
      /* @__PURE__ */ jsx("path", { d: "M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" })
    ]
  }
);
const Volume = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen alto",
    id: "volume-icon",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" }),
      /* @__PURE__ */ jsx("path", { d: "M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" })
    ]
  }
);
const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);
  const isVolumeSilenced = volume < 0.1;
  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-2", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "opacity-70 hover:opacity-100 transition",
        onClick: handleClickVolumen,
        children: isVolumeSilenced ? /* @__PURE__ */ jsx(VolumeSilence, {}) : /* @__PURE__ */ jsx(Volume, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [100],
        max: 100,
        min: 0,
        value: [volume * 100],
        className: "w-[100px]",
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }
      }
    )
  ] });
};
const SongControl = ({ audio, nextSong, repeat }) => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audio.current.currentTime);
    };
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audio]);
  const handleNextSong = () => {
    if (repeat) {
      audio.current.currentTime = 0;
      audio.current.play();
    } else {
      nextSong();
    }
  };
  useEffect(() => {
    audio.current.addEventListener("ended", handleNextSong);
    return () => {
      audio.current.removeEventListener("ended", handleNextSong);
    };
  }, [audio, repeat, nextSong]);
  const formatTime = (time) => {
    if (time == null)
      return `0:00`;
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const duration = audio?.current?.duration ?? 0;
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-x-3 text-xs pt-2", children: [
    /* @__PURE__ */ jsx("span", { className: "opacity-50 w-12 text-right", children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        value: [currentTime],
        max: duration,
        min: 0,
        className: "w-48 lg:w-[400px]",
        onValueChange: (value) => {
          const [newCurrentTime] = value;
          audio.current.currentTime = newCurrentTime;
        }
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "opacity-50 w-12", children: duration ? formatTime(duration) : "0:00" })
  ] });
};
const CurrentSong = ({ albumId, image, title, artists }) => {
  const handleClick = (e) => {
    if (actualId === albumId) {
      e.preventDefault();
    }
  };
  return /* @__PURE__ */ jsx("a", { href: `/playlist/${albumId}`, onClick: handleClick, children: /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-4 relative overflow-hidden`, children: [
    /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 rounded-md shadow-lg overflow-hidden", children: image && /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: title,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm block", children: title }),
      /* @__PURE__ */ jsx("span", { className: "text-xs opacity-80", children: artists?.join(", ") })
    ] })
  ] }) });
};
function Player() {
  const [firstMount, setFirstMount] = useState(true);
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic, volume } = usePlayerStore((state) => state);
  const audioRef = useRef();
  const [isRandom, setIsRandom] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  useEffect(() => {
    fetch("/api/get-info-playlist.json?id=1").then((res) => res.json()).then((data) => {
      const { songs, playlist } = data;
      setCurrentMusic({ playlist, songs, song: songs[0] });
      setFirstMount(false);
    });
  }, []);
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      if (!firstMount) {
        audioRef.current.play();
      }
    }
  }, [currentMusic]);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  const handlePrevious = () => {
    const { song, songs } = currentMusic;
    const index = songs.findIndex((s) => s.id === song.id);
    const previousSong = songs[index - 1];
    if (previousSong) {
      setCurrentMusic({ ...currentMusic, song: previousSong });
    }
  };
  const handleNext = () => {
    const { song, songs } = currentMusic;
    if (isRandom) {
      let newSong = song;
      while (newSong.id === song.id) {
        const randomIndex = Math.floor(Math.random() * songs.length);
        newSong = songs[randomIndex];
      }
      setCurrentMusic({ ...currentMusic, song: newSong });
    } else {
      const index = songs.findIndex((s) => s.id === song.id);
      const nextSong = songs[index + 1];
      if (nextSong) {
        setCurrentMusic({ ...currentMusic, song: nextSong });
      } else {
        setCurrentMusic({ ...currentMusic, song: songs[0] });
      }
    }
  };
  const handleRandom = () => {
    setIsRandom(!isRandom);
  };
  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:justify-between w-full py-2 px-8 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full lg:w-72 flex justify-center lg:justify-start mb-6 lg:mb-0", children: /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center gap-4 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-col items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            title: "Orden aleatorio",
            className: "p-2 opacity-70 hover:opacity-100 transition",
            onClick: handleRepeat,
            children: /* @__PURE__ */ jsx(Repeat, { color: isRepeat ? "#1ED760" : "#fafafa" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            title: "Canción anterior",
            className: "p-2 opacity-70 hover:opacity-100 transition",
            onClick: handlePrevious,
            children: /* @__PURE__ */ jsx(Previous, {})
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "bg-white rounded-full p-3", onClick: handleClick, children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {}) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            title: "Canción siguiente",
            className: "p-2 opacity-70 hover:opacity-100 transition",
            onClick: handleNext,
            children: /* @__PURE__ */ jsx(Next, {})
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            title: "Activar repetición",
            className: "p-2 opacity-70 hover:opacity-100 transition",
            onClick: handleRandom,
            children: /* @__PURE__ */ jsx(Randomize, { color: isRandom ? "#1ED760" : "#fafafa" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        SongControl,
        {
          audio: audioRef,
          nextSong: handleNext,
          repeat: isRepeat
        }
      ),
      /* @__PURE__ */ jsx("audio", { ref: audioRef })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full lg:w-72 flex justify-center lg:justify-end mt-6 lg:mt-0", children: /* @__PURE__ */ jsx(VolumeControl, {}) }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
}

function SongPlayButton({ id, albumId, size = "small" }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id == albumId;
  const isPlayingSong = isPlaying && isPlayingPlaylist && currentMusic?.song.id == id;
  const handleClick = () => {
    if (isPlayingPlaylist && isPlayingSong) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-song.json?id=${id}&albumId=${albumId}`).then((res) => res.json()).then((data) => {
      const { song, songs, playlist } = data;
      setIsPlaying(true);
      setCurrentMusic({ playlist, songs, song });
    });
  };
  const iconClassName = size === "small" ? "w-2 h-2" : "w-3 h-3";
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: `card-play-button rounded-full p-2 transition 
      ${isPlayingSong ? "bg-green-500 hover:bg-green-400" : "hover:bg-green-500 hover:scale-[1.1]"}
      ${isPlayingSong ? "" : "opacity-0 hover:opacity-100"}
    `,
      children: isPlayingSong ? /* @__PURE__ */ jsx(Pause, { className: iconClassName }) : /* @__PURE__ */ jsx(Play, { className: iconClassName })
    }
  );
}

const $$Astro$5 = createAstro();
const $$MusicsTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MusicsTable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y divide-gray-500/20"> <thead> <tr class="text-zinc-300 text-sm"> <th class="px-4 py-2 font-light">#</th> <th class="px-4 py-2 font-light"></th> <th class="px-4 py-2 font-light">Título</th> <th class="px-4 py-2 font-light">Álbum</th> <th class="px-4 py-2 font-light">${renderComponent($$result, "Time", $$Time, {})}</th> </tr> </thead> <tbody> <tr class="h-[10px]"></tr> ${songs.map((song, index) => renderTemplate`<tr class="text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300"> <td class="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">${index + 1}</td> <td class="px-0 py-2 w-1"> ${renderComponent($$result, "SongPlayButton", SongPlayButton, { "id": song.id, "albumId": song.albumId, "client:load": true, "size": "large", "client:component-hydration": "load", "client:component-path": "/home/maguben/projects/spotify-astro/src/components/SongPlayButton", "client:component-export": "SongPlayButton" })} </td> <td class="px-4 py-2 flex flex-col lg:flex-row gap-3 "> <picture> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-11 h-11 rounded-md"> </picture> <div class="flex flex-col"> <h3 class="text-white text-sm lg:text-base font-normal">${song.title}</h3> <span class="text-xs lg:text-sm">${song.artists?.join(", ")}</span> </div> </td> <td class="px-4 py-2">${song.album}</td> <td class="px-0 text-center py-2 rounded-tr-lg rounded-br-lg">${song.duration}</td> </tr>`)} </tbody> </table>`;
}, "/home/maguben/projects/spotify-astro/src/components/MusicsTable.astro", void 0);

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "/home/maguben/projects/spotify-astro/src/icons/Library.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "/home/maguben/projects/spotify-astro/src/icons/Home.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`;
}, "/home/maguben/projects/spotify-astro/src/icons/Search.astro", void 0);

const $$Astro$4 = createAstro();
const $$SideMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center px-2 py-3 font-medium transition-duration-300"> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "/home/maguben/projects/spotify-astro/src/components/SideMenuItem.astro", void 0);

function PlaylistPlaying({ albumId }) {
  const { currentMusic, isPlaying } = usePlayerStore((state) => state);
  const [isPlayingPlaylist, setIsPlayingPlaylist] = useState(false);
  useEffect(() => {
    setIsPlayingPlaylist(isPlaying && currentMusic?.playlist?.id == albumId);
  }, [isPlaying, currentMusic, albumId]);
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `card-play-button rounded-full p-2 transition 
    `,
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Playing, {}) : null
    }
  );
}

const $$Astro$3 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { albumId, cover, title, artists } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(`/playlist/${albumId}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-4 rounded-md hover:bg-zinc-500"> <picture class="h-10 w-10 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="w-full h-full object-cover rounded-md"> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white text-sm">${title}</h4> <span class="text-xs text-gray-400">${artistsString}</span> </div> ${renderComponent($$result, "PlaylistPlaying", PlaylistPlaying, { "client:load": true, "albumId": albumId, "client:component-hydration": "load", "client:component-path": "/home/maguben/projects/spotify-astro/src/components/PlaylistPlaying", "client:component-export": "PlaylistPlaying" })} </a> </li>`;
}, "/home/maguben/projects/spotify-astro/src/components/SideMenuCard.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg py-2 px-4"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeIcon", $$Home, {})}
Inicio
` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchIcon", $$Search, {})}
Buscar
` })} </ul> </div> <div class="bg-zinc-900 rounded-lg py-2 px-4 flex-1"> <ul role="list"> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LibraryIcon", $$Library, {})}
Tu biblioteca
` })} ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> </div> </nav>`;
}, "/home/maguben/projects/spotify-astro/src/components/AsideMenu.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/maguben/projects/spotify-astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="
    Scrotify es una aplicación web para escuchar música en línea. Escucha tus canciones favoritas, crea tus propias listas de reproducción y descubre nueva música."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/spotify.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-full lg:h-screen p-3 gap-3" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex flex-col overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] py-4 lg:py-0" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "@/components/Player", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-player") })} </footer> </div>   </body> </html>`;
}, "/home/maguben/projects/spotify-astro/src/layouts/Layout.astro", "self");

function CardPlayButton({ id, size = "small" }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs, playlist } = data;
      setIsPlaying(true);
      setCurrentMusic({ playlist, songs, song: songs[0] });
    });
  };
  const iconClassName = size === "small" ? "w-4 h-4" : "w-6 h-6";
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "card-play-button rounded-full bg-green-500 p-4 hover:scale-[1.1] transition hover:bg-green-400",
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Pause, { className: iconClassName }) : /* @__PURE__ */ jsx(Play, { className: iconClassName })
    }
  );
}

const ChevronRight = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h16v16H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M15 6l-6 6l6 6" })
    ]
  }
);
function PlaylistNavigation() {
  return /* @__PURE__ */ jsx("a", { href: "/", className: "mx-6 mt-4", children: /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-x-2 rounded-full py-2 ps-2 pe-3 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300", children: [
    /* @__PURE__ */ jsx(ChevronRight, {}),
    "Volver"
  ] }) });
}

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playlistSongs = songs.filter(
    (song) => song.albumId === playlist?.albumId
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Scrotify \u2014 ${playlist?.title}` || "Scrotify \u2014 Playlist" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full overflow-x-hidden"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <!-- Fondo desenfocado --> <div class="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat blur-lg opacity-60"${addAttribute(`background-image: url(${playlist?.cover});`, "style")}></div> ${renderComponent($$result2, "PlaylistNavigation", PlaylistNavigation, {})} <header class="flex flex-col lg:flex-row gap-8 px-6 my-4"> <picture class="aspect-square w-44 h-44 flex-none"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="w-full h-full object-cover shadow"${addAttribute(renderTransition($$result2, "5nowoi2v", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="text-5xl font-bold block text-white"> ${playlist?.title} <span${addAttribute(renderTransition($$result2, "zozsook2", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex-1 flex items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "xoykjiwc", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span class="text-white">${playlistSongs.length} canciones</span>,
              3 h aproximadamente
</p> </div> </div> </div> <div class="px-0 flex flex-1 items-end justify-start lg:justify-end"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "id": id, "client:load": true, "size": "large", "client:component-hydration": "load", "client:component-path": "@/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> </header> <section class="px-6"> ${renderComponent($$result2, "MusicsTable", $$MusicsTable, { "songs": playlistSongs })} </section> <div class="relative z-10 px-6"></div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-10"></div> </div> ` })}`;
}, "/home/maguben/projects/spotify-astro/src/pages/playlist/[id].astro", "self");

const $$file = "/home/maguben/projects/spotify-astro/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, CardPlayButton as C, _id_ as _, allPlaylists as a, playlists as p, songs as s };
