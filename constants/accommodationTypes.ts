import { type ComponentType, type SVGProps } from "react";
import {
  BedDouble, Building2, Trees, Home, Palmtree, Waves, Umbrella,
  Tent, Building, House, Castle, TreePine, Tractor
} from "lucide-react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const ACCOM_TYPES: { label: string; Icon: IconType }[] = [
  { label: "Rooms",        Icon: BedDouble },
  { label: "Mansion",      Icon: Building2 },
  { label: "Countryside",  Icon: Trees },
  { label: "Villa",        Icon: Home },
  { label: "Tropical",     Icon: Palmtree },
  { label: "Amazing pool", Icon: Waves },
  { label: "Beach house",  Icon: Umbrella },
  { label: "Island",       Icon: Palmtree }, // reuse palm
  { label: "Camping",      Icon: Tent },
  { label: "Apartment",    Icon: Building },
  { label: "House",        Icon: House },
  { label: "Lakefront",    Icon: Waves },
  { label: "Farm house",   Icon: Tractor },
  { label: "Treehouse",    Icon: TreePine },
  { label: "Cabins",       Icon: Home },     // reuse home
  { label: "Castles",      Icon: Castle },
  { label: "Lakeside",     Icon: Waves },
];
