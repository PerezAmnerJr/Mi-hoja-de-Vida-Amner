import { useEffect } from 'react'


export function useReveal() {
useEffect(() => {
const els = document.querySelectorAll<HTMLElement>('.reveal')
const io = new IntersectionObserver((entries) => {
entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('show') })
}, { threshold: 0.15 })


els.forEach((el) => io.observe(el))
return () => io.disconnect()
}, [])
}