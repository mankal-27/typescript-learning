import type { Module } from "../../types";
import gettingStarted from "./01-getting-started";
import basicTypes from "./02-basic-types";
import functions from "./03-functions";
import interfacesTypes from "./04-interfaces-types";
import unionNarrowing from "./05-union-narrowing";
import classes from "./06-classes";
import enumsLiterals from "./07-enums-literals";
import generics from "./08-generics";
import advancedTypes from "./09-advanced-types";
import modules from "./10-modules";
import decorators from "./11-decorators";
import realWorld from "./12-real-world";

export const allModules: Module[] = [
  gettingStarted,
  basicTypes,
  functions,
  interfacesTypes,
  unionNarrowing,
  classes,
  enumsLiterals,
  generics,
  advancedTypes,
  modules,
  decorators,
  realWorld,
].sort((a, b) => a.order - b.order);

export function getModuleBySlug(slug: string): Module | undefined {
  return allModules.find((m) => m.slug === slug);
}

export function getAdjacentModules(slug: string): {
  prev: Module | null;
  next: Module | null;
} {
  const index = allModules.findIndex((m) => m.slug === slug);
  return {
    prev: index > 0 ? allModules[index - 1] : null,
    next: index >= 0 && index < allModules.length - 1 ? allModules[index + 1] : null,
  };
}
