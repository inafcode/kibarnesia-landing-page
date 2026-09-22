// File: src/data/clientData.jsx
import React from 'react';

export const clients = [
  {
    id: 1,
    name: 'TRANSmart',
    type: 'text',
    render: () => (
      <div className="text-red-600 font-black text-2xl tracking-tighter uppercase">
        TRANS<span className="lowercase font-bold text-xl">mart</span>
      </div>
    ),
  },
  {
    id: 2,
    name: 'emina',
    type: 'badge',
    render: () => (
      <div className="flex flex-col items-center">
        <svg className="w-5 h-5 text-slate-700 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span className="font-serif text-slate-800 font-bold text-xl tracking-wide">emina</span>
      </div>
    ),
  },
  {
    id: 3,
    name: 'Curcuma Plus',
    type: 'badge',
    render: () => (
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 p-0.5 flex items-center justify-center shadow-sm">
        <div className="w-full h-full rounded-full bg-amber-600/90 flex flex-col items-center justify-center text-white text-center px-1">
          <span className="text-[11px] font-bold leading-none">Curcuma</span>
          <span className="text-[10px] font-black text-yellow-200 leading-none">Plus</span>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: 'im3 ooredoo',
    type: 'badge',
    render: () => (
      <div className="flex flex-col items-center">
        <span className="text-slate-900 font-black text-2xl tracking-tight leading-none">im3</span>
        <span className="text-red-600 font-bold text-sm tracking-wider leading-none mt-0.5">ooredoo</span>
      </div>
    ),
  },
  {
    id: 5,
    name: 'Incubator Center UBSI',
    type: 'badge',
    render: () => (
      <div className="flex flex-col items-center text-center">
        <div className="w-8 h-8 bg-blue-600 text-yellow-300 font-extrabold flex items-center justify-center rounded-sm shadow-sm text-xs">
          UBSI
        </div>
        <span className="text-[9px] font-bold text-blue-900 mt-1 uppercase leading-tight">
          INCUBATOR CENTER
        </span>
      </div>
    ),
  },
  {
    id: 6,
    name: 'SMA Taruna Bumi Khatulistiwa',
    type: 'badge',
    render: () => (
      <div className="w-14 h-14 rounded-full border-2 border-yellow-500 bg-blue-900 flex items-center justify-center p-1 text-center shadow-sm">
        <span className="text-[7px] text-yellow-300 font-bold leading-tight uppercase">
          SMA Taruna
        </span>
      </div>
    ),
  },
  {
    id: 7,
    name: 'TRANSmart',
    type: 'text',
    render: () => (
      <div className="text-red-600 font-black text-2xl tracking-tighter uppercase">
        TRANS<span className="lowercase font-bold text-xl">mart</span>
      </div>
    ),
  },
  {
    id: 8,
    name: 'emina',
    type: 'badge',
    render: () => (
      <div className="flex flex-col items-center">
        <svg className="w-5 h-5 text-slate-700 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span className="font-serif text-slate-800 font-bold text-xl tracking-wide">emina</span>
      </div>
    ),
  },
  {
    id: 9,
    name: 'Curcuma Plus',
    type: 'badge',
    render: () => (
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 p-0.5 flex items-center justify-center shadow-sm">
        <div className="w-full h-full rounded-full bg-amber-600/90 flex flex-col items-center justify-center text-white text-center px-1">
          <span className="text-[11px] font-bold leading-none">Curcuma</span>
          <span className="text-[10px] font-black text-yellow-200 leading-none">Plus</span>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    name: 'im3 ooredoo',
    type: 'badge',
    render: () => (
      <div className="flex flex-col items-center">
        <span className="text-slate-900 font-black text-2xl tracking-tight leading-none">im3</span>
        <span className="text-red-600 font-bold text-sm tracking-wider leading-none mt-0.5">ooredoo</span>
      </div>
    ),
  },
  {
    id: 11,
    name: 'Incubator Center UBSI',
    type: 'badge',
    render: () => (
      <div className="flex flex-col items-center text-center">
        <div className="w-8 h-8 bg-blue-600 text-yellow-300 font-extrabold flex items-center justify-center rounded-sm shadow-sm text-xs">
          UBSI
        </div>
        <span className="text-[9px] font-bold text-blue-900 mt-1 uppercase leading-tight">
          INCUBATOR CENTER
        </span>
      </div>
    ),
  },
  {
    id: 12,
    name: 'SMA Taruna Bumi Khatulistiwa',
    type: 'badge',
    render: () => (
      <div className="w-14 h-14 rounded-full border-2 border-yellow-500 bg-blue-900 flex items-center justify-center p-1 text-center shadow-sm">
        <span className="text-[7px] text-yellow-300 font-bold leading-tight uppercase">
          SMA Taruna
        </span>
      </div>
    ),
  },
];