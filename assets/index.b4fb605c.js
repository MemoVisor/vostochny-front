const l=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};l();const c=["red","blue","deeppink","green","purple","orange","aqua","rosybrown","greenyellow"];function d(n,t){const o=Math.ceil(n),s=Math.floor(t);return Math.floor(Math.random()*(s-o)+o)}function u(){const n=document.getElementById("header");if(!n)return;n.innerHTML="";const t="Memovisor";for(const o of t){const s=d(0,c.length-1),e=document.createElement("span");e.style.setProperty("color",c[s]),e.innerHTML=o,n.appendChild(e)}}var f="/vostochny-front/assets/placeholder.8f8964bd.png",p="/vostochny-front/assets/notification.939285bd.mp3";function a(){new Audio(p).play()}async function m(){const n=await fetch("/api/memes/last/");let t=f;try{t=(await n.json()).url}catch{}const o=document.getElementById("image");if(!o)return;o.getAttribute("src")!==t&&(a(),o.setAttribute("src",t))}setInterval(u,200);setInterval(m,1e3);setInterval(a,1e4);
