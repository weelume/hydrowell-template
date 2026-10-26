export type IconName='drain'|'shield'|'wrench'|'star'|'clock'|'mail'|'pin'
const paths:Record<IconName,string>={
 drain:'M3 3h18v5H3z M5 8l2 4h10l2-4 M8 16l-2 5 M13 16l-2 5 M18 16l-2 5',
 shield:'M12 2c3 3 6 4 8 4v7c0 5-4 7-8 9-4-2-8-4-8-9V6c2 0 5-1 8-4z M9 12l2 2 4-4',
 wrench:'M15 3a6 6 0 00-7 8L2 17a3 3 0 004 4l7-7a6 6 0 008-7l-4 4-4-4 4-4z',
 star:'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z',
 clock:'M12 2a10 10 0 100 20 10 10 0 000-20 M12 6v6l4 2',
 mail:'M3 5h18v14H3z M3 6l9 7 9-7',
 pin:'M12 22s8-7 8-12a8 8 0 10-16 0c0 5 8 12 8 12z M9 10a3 3 0 106 0 3 3 0 00-6 0',
}
export function Icon({name}:{name:IconName}){return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]}/></svg>}
