import {
  Rocket,
  Type,
  FunctionSquare,
  Layout,
  GitBranch,
  Box,
  ListOrdered,
  Boxes,
  Sparkles,
  FolderTree,
  Wand2,
  Trophy,
  type LucideProps,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Rocket,
  Type,
  FunctionSquare,
  Layout,
  GitBranch,
  Box,
  ListOrdered,
  Boxes,
  Sparkles,
  FolderTree,
  Wand2,
  Trophy,
};

export default function ModuleIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon {...props} />;
}
