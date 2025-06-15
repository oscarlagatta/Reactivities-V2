
/**
 * Because a .d.ts file without any import or export is treated as a script rather than a module. Scripts contribute their 
 * declarations to the global namespace, so every type, interface, and value you declare here becomes visible project-wide. 
 * NO IMPORT NEEDED in other files. 
 * To opt out of that implicit global behaviour, we must turn the file into a MODULE by adding at least one export.
 * 
 * export type Activity 
 */

type Activity = {
    id: string
    title: string
    date: string
    description: string
    category: string
    isCancelled: boolean
    city: string
    venue: string
    latitude: number
    longitude: number
}